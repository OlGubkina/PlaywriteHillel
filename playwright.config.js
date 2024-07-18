import { defineConfig, devices } from '@playwright/test' //ES module

const config = defineConfig({
  testDir: './tests', // Default
  // Или
  //testMatch: '/tests/**/*.spec.js',
  //testIgnore: '/tests/**/*.skip.spec.js',

  //globalSetup: './global.setup.js',
  // выполняется один раз перед всеми тестами
  // (!) Не отобр в репортах

  //globalTeardown: './global.teardown.js',
  // выполнится один раз после всех тестов

  fullyParallel: false,
  // true -> несколько воркеров выполняют один тестовый файл
  // false -> 1 worker - 1 testfile

  forbidOnly: !!process.env.CI, //не пропускает тесты с .only

  retries: process.env.CI ? 1 : 0,

  workers: 3,

  reporter: 'html',

  use: {
    //headless: true, // pipeline
    headless: false,  // debug - open in Browser

    baseURL: 'https://qauto.forstudy.space/',
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },

    viewport: {
      width: 1280,
      height: 920,
    },

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },

  projects: [ // = Browsers
    {
      name: "setup",
      testMatch: "tests/setup/**/*.setup.js"
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //grep: /@smoke/, // tag для кейсов
    },
    // {
    //   name: 'env1',
    //   use: { ...devices['Desktop Chrome'] },
    //   baseURL: 'https://qauto.forstudy.space/',
    //   dependencies: ['setup:stage'],
    // },
    // {
    //   name: 'env2',
    //   use: { ...devices['Desktop Chrome'] },
    //   baseURL: 'https://qauto2.forstudy.space/',
    // },

  ],
});

export default config