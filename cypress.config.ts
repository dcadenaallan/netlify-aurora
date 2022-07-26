import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  projectId: "ugrz6t",
  defaultCommandTimeout: 15000,
  taskTimeout: 15000,
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  env: {
    DEPLOY_PRIME_URL: 'http://localhost:8888',
  },
  e2e: {
    baseUrl: 'http://localhost:8888',
    setupNodeEvents(on, config) {
      Object.entries(process.env)
        .filter((envArray) => envArray[0].startsWith('CYPRESS_'))
        .forEach((cypressEnvArray) => {
          const propName = cypressEnvArray[0].substring('CYPRESS_'.length)
          // eslint-disable-next-line no-console
          console.log('From cypress.config', {propName, value: cypressEnvArray[1]})
          config.env[propName] = cypressEnvArray[1]
        })
    },
  },
})
