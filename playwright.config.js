import { defineConfig, devices } from '@playwright/test' //ES module
import dotenv from 'dotenv'

dotenv.config({
  path: './.env'
  //path: process.env.ENV === 'dev' ? './env/.env.dev' : './env/.env.stage'
})

const config = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 3,
  reporter: 'html',
  use: {
    headless: false,

    baseURL: process.env.BASE_URL, // значения из .env
    httpCredentials: {
      username: process.env.HTTP_CREDENTIALS_USERNAME, // значения из .env
      password: process.env.HTTP_CREDENTIALS_PASSWORD, // значения из .env
    },

    viewport: {
      width: 1280,
      height: 920,
    },
    trace: "retain-on-failure",
    video: "on",
    screenshot: "only-on-failure"
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});




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


export default config