import {PrismaClient} from "@prisma/client";

describe('AppRoutes', () => {
  let prisma: PrismaClient

  beforeEach(async () => {
    prisma = new PrismaClient()
    await prisma.user.createMany({
      data: [{name: 'Test 1', email: 'test1@test.com'}, {name: 'Test 2', email: 'test2@test.com'}]
    })
  })
  it('Test1', async () => {
    const users = await prisma.user.findMany()
    expect(users.length).toEqual(2)
  })
})
