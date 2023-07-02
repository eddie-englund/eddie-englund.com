import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  srcDir: './src',
  content: {
    highlight: {
      theme: {
        default: 'one-dark-pro',
      },
    },
  },
  tailwindcss: {
    config: {
      darkMode: true,
      content: [
        `components/**/*.{vue,js,ts}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `utils/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`,
        `Error.{js,ts,vue}`,
        `error.{js,ts,vue}`,
        `app.config.{js,ts}`,
      ],
      theme: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
        },
        extend: {
          colors: {
            bg: '#111117',
            cardBackground: '#212129',
            cardBackgroundDarker: '#18181F',
            light: '#dad3fd',
            headerText: '#EEEBFD',
            main: '#9E9BAF',
            link: ' #9681FC',
            linkMuted: 'hsla(250, 91%, 91%, 0.7)',
            slBlue: '#75A1E3',
            wlGreen: '#4BB8A7',
          },
          typography: {
            DEFAULT: {
              css: {
                a: {
                  color: '#9681FC',
                  '&:hover': {
                    color: 'hsla(250, 91%, 91%, 0.7)',
                  },
                },
              },
            },
          },
        },
      },
      plugins: [typography],
    },
  },
});
