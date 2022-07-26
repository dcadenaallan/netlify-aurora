import { schedule } from '@netlify/functions'
import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()
const CRON_EXPRESSION = process.env.HEALTH_CRON

const handler = async function (event, context) {
  console.log('Received event:', event)
  const host = (process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL) + '/api'
  console.log({ host, cron: CRON_EXPRESSION })
  let statusCode = 200
  try {
    const res = await Promise.allSettled([axios.get(`${host}/normal-test/health`)])
    console.log({res: JSON.stringify(res)})
  } catch (e) {
    statusCode = 400
  }
  return {
    statusCode,
  }
}

module.exports.handler = schedule(CRON_EXPRESSION, handler)
