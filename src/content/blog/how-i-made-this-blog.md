---
description: 'How to make an blog with Nuxt3, TypeScript, Tailwindcss, and markdown.'
date: '2023-06-14'
img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3268&q=80'
---

# How I made this blog with Nuxt3 and Tailwind

I bet a lot of you have wanted to create your own blog as a side project at some point, and thanks to [Nuxt3](https://nuxt.com/docs) and
its [content module](https://nuxt.com/modules/content) which is a first party module to Nuxt3, its insanely easy to do! Even better, styling is also super easy to do thanks to [Tailwind](https://tailwindcss.com/) and the [Typography](https://tailwindcss.com/docs/typography-plugin) addon.

So in this article I will guide you through the project setup, how to query data to make an "articles" page
and how to render the content programmatically but also how to style it.

## Project setup

First of all we need a Nuxt project. The easiest way to do is with the following command:

```bash
npx nuxi@latest init my-app-name-here
```

Once we have the project initialized and done a `cd my-app-name-here` we want to add som other dependencies. Run the following command (or with your favorite package manager I prefer pnpm but will use npm here in this example)

```bash
npm install -D tailwindcss postcss autoprefixer @nuxtjs/tailwindcss && npm install @nuxt/content
```

Great, now we have installed all the dependencies we will need but we will need to do some other configuration.

First lets get a tailwind config.

```bash
npx tailwindcss init
```

Great! Now to make some modifications.

First we want to have everything under the src/ dir (at least I do) so we will need to make some adjustments in both the `tailwind.config.js` config but also the `nuxt.config.ts`.

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  srcDir: './src',
  content: {
    highlight: {
      theme: {
        default: 'one-dark-pro',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
```

And the Tailwind config.

```js
/** @type {import('tailwindcss').Config} */
const typography =  require('@tailwindcss/typography');

module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    // note that this one does not have ./src prefix
    // since the nuxt config lives in the root directory
    "./nuxt.config.{js,ts}",
    "./src//app.vue",
  ],
  theme: {
    extend: {
    // here you can set defaults for all text
    typography: {},
    },
  },
  plugins: [typography],
}
```

Nice, now we're almost done with configuration!

Last thing we need to do is to add our css files in `src/assets/css/`

So there we create a `main.css` with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Nice, now we're ready to start coding!

First things first, to make this a bit simpler I won't be doing all the pages of my portfolio, so we will just do a landing page which will be the "articles" page and then the pages for the articles themselves.

In `src/app.vue` we will remove all the predefined html there and change it a bit, so it should look like this:

```html
<template>
  <div>
    <nuxt-page />
  </div>
</template>
```

## The articles page

This will simply just render the `pages/index.vue` file by default as a "home" route which will be the articles page and then it will render any other content which it matches with the automatic routing of Nuxt.

Then in `index.vue` lets bootstrap it like this:

```html
<script lang="ts" setup></script>

<template>
  <div></div>
</template>
```

Then let's use some built in tools from the `content` module to get some metadata from all our articles so that we can make a card section which will hold a link to each article.

```html
<script lang="ts" setup>
interface Article extends ParsedContent {
  title: string;
  _path: string;
  description: string;
};

const { data, pending } = await useAsyncData('articles', () =>  queryContent<Article[]>('articles')
      .only(['title', 'description', '_path'])
      .sort({ date: 1})
      .find()
    );
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-white">Articles</h1>
    <p class="text-main text-lg">Articles tagline</p>
    <div class="mt-10 grid gap-4 lg:mt-14">
      <div v-if="pending" class="flex animate-pulse flex-col items-center h-full justify-center">
        <div v-for="n in 3" :key="n" class="w-36 bg-gray-300 h-6 rounded-md"></div>
      </div>
      <nuxt-link
        v-for="article in data"
        :key="article.title"
        :to="article._path"
        class="bg-sky-50 flex flex-col rounded p-5 align-middle duration-150 ease-in-out hover:cursor-pointer hover:opacity-80"
      >
        <h4 class="text-lg font-medium">{{ article.title }}</h4>
        <p class="text-sm text-slate-500">{{ article.description }}</p>
      </nuxt-link>
    </div>
  </div>
</template>
```

And that's it! Now we have a fully functional articles page. Of course there are more things that we could do to improve it, but that's the gist of it.

## Rendering the articles

Thanks to the power of Nuxt3 we can easily do this.

First, lets create `src/pages/articles/[...slug].vue`

In it the template is quite simple:

```html
<template>
  <main>
    <content-doc class="prose lg:prose-lg" />
  </main>
</template>
```

Let's add an article so we have something to render...

`src/content/test`

```md
---
description: 'my description of this article'
---

# Hello world

This is my test article


```

And that's it!

Now we should have a decent looking blog with an articles page.

![my image](/blog-home.png)
![my image](/blog-article.png)
