## Saucedemo e2e tests [![pipeline status](https://github.com/diboris/saucedemo-e2e-playwright/actions/workflows/actions.yaml/badge.svg)](https://github.com/diboris/saucedemo-e2e-playwright/actions)

Automation tests with [Playwright](https://playwright.dev/) 

## Run

Run in desktop mode

```shell
npm install
npm run test
```

## Reports

HTML reports are generated to **playwright-report** folder.
[Built-in reports](https://playwright.dev/docs/test-reporters) is used for reporting.

To trigger the e2e tests to run in GitHub actions open https://github.com/diboris/saucedemo-e2e-playwright/actions/workflows/actions.yaml page and click the **Run workflow** dropdown and click the **Run workflow** button.

## Local execution

- Clone the repository 
- Via Jetbrains IDE
  - open project in ide
  - install 'NodeJS' plugin if you don’t have it
  - in package.json file click on the Run icon next to the `test` target.
