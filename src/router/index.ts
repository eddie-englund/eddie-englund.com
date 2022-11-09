import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home-view.vue';
import projectView from '@/views/project-view.vue';

const AppTitle = import.meta.env.VITE_APP_TITLE;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact-view.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/projects-view.vue'),
    },
    {
      path: '/projects/accountiq',
      name: 'WorldLine Global',
      component: projectView,
      props: {
        projectUrl: 'https://home.accountiq.io',
        title: 'WorldLine Global',
        textBody:
          'AccountIQ is an automated reconciliation platform/solution owned by WorldLine global. Traditional manual reconciliation of transactions is a time-consuming, costly, and monthly task (at the end of the start of the month). All of which causes high workloads during short periods. To alleviate this AccountIQ was created to do this in an automated fashion. However, this is not the only solution AccountIQ provides. However, it is its flagship product/solution.',
        bulletPoints: [
          {
            title: 'AccountIQ consists of the following',
            items: [
              'Main backoffice (web app)',
              'Sales website (web app)',
              'Documentation portal (web app)',
              'Several back-end services in Scala (Play-framework and ZIO)',
            ],
          },
          {
            title: 'Some technologies used',
            items: [
              'ZIO',
              'Cats effects/IO',
              'PostgresDB',
              'ElasticSearch',
              'Akka Actors',
              'VueJs (2 & 3)',
              'Vuex',
              'Pinia',
              'Typescript',
            ],
          },
        ],
        crumbs: [
          {
            name: 'Home',
            to: '/',
          },
          {
            name: 'Projects',
            to: '/projects',
          },
          {
            name: 'WorldLine Global',
            to: '/projects/accountiq',
          },
        ],
      },
    },
    {
      path: '/projects/sl',
      name: 'SL Issue Tracker',
      component: projectView,
      props: {
        projectUrl: 'https://sl.mingodesk.com',
        title: 'SL Issue Tracker',
        textBody:
          'The SL issue tracker is a personal project that developed as I was and am very frustrated with the public transport situation in Stockholm. The trains and busses are inconsistent, late or leaves early, incompetent drivers, IT systems not working as expected and much more',
        bulletPoints: [
          {
            title: 'The Sl Issue Tracker consists of the following',
            items: ['Web app', 'Back-end application'],
          },
          {
            title: 'Some technologies used',
            items: ['TypeScript', 'Vue 3', 'ExpressJs', 'PostgresDB', 'MikroOrm', 'Docker'],
          },
        ],
        crumbs: [
          {
            name: 'Home',
            to: '/',
          },
          {
            name: 'Projects',
            to: '/projects',
          },
          {
            name: 'SL issue tracker',
            to: '/projects/sl',
          },
        ],
      },
    },
  ],
});

router.afterEach((to) => nextTick(() => (document.title = `${AppTitle} | ${to.name?.toString()}`)));

export default router;
