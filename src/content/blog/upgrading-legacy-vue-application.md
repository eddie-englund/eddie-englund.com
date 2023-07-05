---
description: 'Maintinaing old applications can be hard! So in this article I go over one of my worst experiences so far updating a Vue 2 application with 5 year old dependencies.'
date: '2023-06-14'
---

# Upgrading a legacy vue application

## Preface

At my current workplace and it's project (2023-07) we have several websites, I created relatively recently.
However, there is one web application which has existed for much longer. In fact, the first GitHub commit was done in 2017 and
hasn't ever been worked on by actual front-end developers, but rather back-end developers.

This has led to a lot of neglect and hacks all around. When I joined back in 2022 the dependencies were unchanged since 2017.
Axios version was 0.23.0 and Webpack had version 2.7.0 (current as of typing is 1.4.0 and 5.88.1 respectively).
And trust me, we had plenty of other dependencies that were also outdated.

So, why change now if the application hasn't in so long? Well, let's start with the main reason. We wanted to change our data grid
from [handsontable](https://www.npmjs.com/package/handsontable) which we had at a deprecated 6.2.3 with the old
"handsontable-pro" dependency (no longer called pro). Because of several reason (some of which I won't go into here), but the main reason
was that it was very hard to work with, the setup was super complex and not extendable or even comprehensable at all and worst of all
the performance was horrible.

So, let's change! We looked at some alternatives and decided to use [RevoGrid](https://revolist.github.io/revogrid/) which seemed
promising. However, our original attempt to use it was unsuccessful. RevoGrid needed a higher Node.js version (at the time we used Node.js 14),
but we weren't 100% sure about this, if not that, maybe it was our ancient Babel setup (who knows!).

We decided that it was time to look into updating our dependencies.

## Switching from Webpack to Vite

Going into this task we had a lot of freedom to upgrade as we liked, partially because of poor planning, but it did give us developers
free reign. So we decided to try and modernise as many dependencies as we could.

The first contender for an upgrade was the build tool: Webpack 2. We could continue to use Webpack and upgrade to the latest version.
However, since none of our old (and frankly bad) setup would work at all with Webpack 5 we might as well try a new kid on the block
which seemed very promising, Vite.

The main reason for choosing Vite was its simple configuration and its speed relative to Webpack especially in the dev environment
with hot reloading.

This however, came with a big caveat that we wouldn't be able to ignore no matter what new build tool to use. We weren't going to be able to use any
of the build dependencies beyond webpack itself. Because they are tied to Webpack and made specifically for Webpack 2.7. So even if we wanted to stay
with Webpack we would need to remake the entire setup no matter what.

Dev dependencies related to build:

```json
"devdependencies": {
    "babel-core": "^6.26.3",
    "babel-eslint": "^7.2.3",
    "babel-helper-vue-jsx-merge-props": "^2.0.2",
    "babel-loader": "^6.4.1",
    "babel-plugin-istanbul": "^3.1.2",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-plugin-transform-vue-jsx": "^3.7.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-preset-vue": "^1.2.1",
    "babel-register": "^6.26.0",
    "copy-webpack-plugin": "^4.6.0",
    "cross-env": "^3.2.4",
    "css-loader": "^0.28.11",
    "deepmerge": "^4.2.2",
    "eventsource-polyfill": "^0.9.6",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "html-webpack-plugin": "^2.30.1",
    "inject-loader": "^2.0.1",
    "optimize-css-assets-webpack-plugin": "^1.3.2",
    "url-loader": "^0.6.2",
    "vue-loader": "^11.3.4",
    "vue-style-loader": "^2.0.5",
    "webpack": "^2.7.0",
    "webpack-bundle-analyzer": "^2.13.1",
    "webpack-dev-middleware": "^1.12.2",
    "webpack-hot-middleware": "^2.25.1",
    "webpack-merge": "^2.6.1"
}
```

So as you can see we had a lot of work ahead of us.

However after a lot of work to get the project to compile and run we noticed something horrible. **Handsontable broke**...
Of course our intetions was always to replace it but the way we had initally planned it was to do it over several sprints,
and change views on the go so that we could split it up into more manageble tasks.

This was a major setback for us because it meant that we no longer could simply do a partial upgrade and just update our dependencies,
build tools, CI/CD, and basic changes to the application internals. No, we had to re-write **major** parts of the application and had
to move to RevoGrid in one go.

## The rewrite and things we found

Due to the old grids completely breaking we needed to remake at minimum 7-8 advanced data grids and pages,
everything surrounding it from API calls, filters, interfaces, and more.

### Strange findings and changes in behaviour

One thing we realised was that we had very unstable behaviour with the `this` keyword in our Vue components.
For example this component:

```html
<template>
  <div class="my-page-container">
    <h1>{{ this.myComputedProperty }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    myComputedProperty() {
      return 1 + 1
    }
  }
}
</script>
```

Components like these that used the `this` keyword for computed properties worked just as expected before our
use of Vite and vite-plugin-vue (among others). However, after the update the didn't work!

The keen eye among you may already know what's wrong. You're not supposed to use the `this` keyword for computed properties and methods
and we can even see this in the Vue2 [documentation](https://v2.vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods)
where they show this example:

```html
<p>Reversed message: "{{ reverseMessage() }}"</p>
```

```js
// in component
methods: {
  reverseMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

But for some reason this all worked in our application before, to which I have no idea why but my guess is that it has something
to do with Webpack and or the dependencies we had with it.

But this wasn't only limited to computed properties but also methods. However, the diffirence was that methods do appear to work
either way i.e with or without the `this` keyword. However, we still have to use `this` in our components in the component methods, computed properties, etc.
Because of this doing a simple "find and replace" and do it on all components was not an option.
This meant that we (I) had to go through almost every single file in use in our application to fix these cases.

### Vue toasted

One of our central dependeices was [vue-toasted](https://www.npmjs.com/package/vue-toasted), but we realised that this Toast which
we used to notify our users of info, success, and errors, was prone to criss-site scripting (XSS) attacks. We found this out in quite a fun way
where our back-end returned an unfiltered error from an integration against a third party which returned HTML and due to it's CSS
our website decided to do a full on barrel roll!

We solved it by switching all of our toasts from vue-toasted to the built in ones available with element ui (the ui library we use)
which treats everything as plain text resolving the security issue with XSS.

### Ingenious error handling

At some point when I was refactoring code I came across this little piece of beautiful code:

```js
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      window.location.reload()
    }
    if (error.response.status === 503 && error.response.headers['x-maintenance-mode']) {
      const commit = store.commit
      commit(PAGE.SET_MAINTENANCE_MODE, true)
    }

    return Promise.reject(error)
  }
)
```

Specifically let's focus on the error handling here:

```js
if (error.response.status === 403 || error.response.status === 401) {
      window.location.reload()
}
if (error.response.status === 503 && error.response.headers['x-maintenance-mode']) {
  const commit = store.commit
  commit(PAGE.SET_MAINTENANCE_MODE, true)
}
```

The first one which is just fabulous will instatly reload our website if any of our HTTP requests result in
a 403 (meaning forbidden) or a 401 (meaning unathorized). So this just got thrown out immediately since this is just pure instanity.
Reloading on this means that **any** API request/endpoint that returned any of these error codes would result in the application simply reloading,
meaning that the user has no idea what just happened, nor do we have a traceable way to detect errors which we can resolve instead.

The second piece of code, unfortunately still lives on and this is because someone in our team (long before me joining),
thought it'd be a good idea to do maintenance mode via chaning our nginx config serving the website to simply respond
with a x-maintenance-mode header along with 503 HTTP status.

At some point we will get around to changing this as well...

## Conclusion

There are many, many, many more issues that I found and patched along the way but here are the main takeaways.

1. Set up sensible rules such as updating dependencies (at least minor versions) every 6 months or so to keep up to date
with potential security vulnerabilities and also end-of-life dependencies so you can move on as soon as possible.
2. Don't cut corners because we all know that leaving a "TODO" in production code, won't lead to it ever being fixed.
Make your implementation as good as you can (within reason).
3. Scope your tasks. This task got **way** out of hand because we kept finding and fixing these issues, adding new tooling like
eslint and prettier, but also TypeScript support.
However, looking back at it, what we should have done is **only** updating the dependencies and fixing the critical issues that stopped
the application from functioning as expected.
4. If you find **BIG** issues like these, make sure to plan ahead as much as possible, by making separated tickets with smaller
chunks of tasks. A big issue with this update even though it improved the application by an insane amount is that I am now
the "mastermind" of the project, which means that most of my colleagues are not up to date with how it behaves now and how the
internals are set out.
5. Continuing on the previous point. **DOCUMENT BEHAVIOUR AND REQUIREMENTS**. This was a major issue for us especially for the stuff
we needed to remake since we didn't really know all of the ins and outs of what it did before because all of the veterans of the project
had left and nothing was documented. The only documentation we had was a bunch of spaghetti front-end code written by a back-end developer.
