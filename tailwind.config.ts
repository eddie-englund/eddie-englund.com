import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'media',
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
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        bg: '#1d1d1e',
        cardBackground: '#222223',
        cardBackgroundDarker: '#18181F',
        light: '#dad3fd',
        headerText: '#EEEBFD',
        main: '#b4b1c6',
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
};

export default config;
