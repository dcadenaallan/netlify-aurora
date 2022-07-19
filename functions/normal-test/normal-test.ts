import express, { json, urlencoded } from 'express'
import serverless from 'serverless-http'
import { AppRoutes } from './src/app.routes'

function createServer() {
  const app = express()

  const router = express.Router()

  AppRoutes.create(router)

  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use('/api/normal-test', router)
  return app
}

module.exports.handler = serverless(createServer(), { provider: 'aws' })
