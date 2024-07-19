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

  forbidOnly: !!process.env.CI, //не пропускает тесты с .only на pipeline, локально разрешено
  //forbidOnly: true //запрещает использовать .only

  retries: 1, // локально
  //retries: process.env.CI ? 1 : 0,

  workers: 3, // локально

  reporter: 'html',

  use: {
    //headless: true, // for pipeline
    headless: false,  // for debug - open in Browser

    baseURL: 'https://qauto.forstudy.space/',
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },

    viewport: {
      width: 1280,
      height: 920,
    },

    // Для репортинга:
    trace: "on", // шаги, запросы, хуки - на этапе дебага ON
    video: "on",
    screenshot: "on"

    //trace: 'retain-on-failure',
    //screenshot: 'only-on-failure'
  },

  projects: [ // = Browsers
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },


    // {
    //   name: "setup:stage",
    //   testMatch: "tests/setup/**/*.setup.js"
    // },
    // {
    //   name: "teardown:stage",
    //   testMatch: "tests/teardown/**/*.teardown.js"
    // },
    // {
    //   name: "stage",
    //   use: {
    //     ...devices['Desktop Chrome'],
    //   },
    //   dependencies: ['setup:stage'],
    //   teardown: 'teardown:stage',
    // },
    //
    // {
    //   name: 'smoke',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     grep: /@smoke/, // tag for smoke TCs
    //     // npx playwright test --project=smoke
    //   },
    // },


    // {
    //   name: 'env1',
    //   use: { ...devices['Desktop Chrome'] },
    //   baseURL: 'https://qauto.forstudy.space/', // npx playwright test --project=env1
    //   dependencies: ['setup:env1'],
    // },
    // {
    //   name: 'env2',
    //   use: { ...devices['Desktop Chrome'] },
    //   baseURL: 'https://qauto2.forstudy.space/',
    // },

  ],
});

export default config