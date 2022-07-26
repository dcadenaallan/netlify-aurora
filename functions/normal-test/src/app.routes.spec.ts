import { PrismaClient } from '@prisma/client'
import { describe, expect } from '@jest/globals'

describe('AppRoutes', () => {
  let prisma: PrismaClient

  describe('root', () => {
    beforeEach(async () => {
      prisma = new PrismaClient()
      await prisma.user.createMany({
        data: [
          { name: 'Test 1', email: 'test1@test.com' },
          { name: 'Test 2', email: 'test2@test.com' },
        ],
      })
    })

    afterEach(async () => {
      prisma = new PrismaClient()
      await prisma.user.deleteMany()
    })

    it('Test1', async () => {
      const users = await prisma.user.findMany()
      expect(users.length).toEqual(2)
    })
  })
})
