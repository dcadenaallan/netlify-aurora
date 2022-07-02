import {PrismaClient} from "@prisma/client";

describe('AppRoutes', () => {
  let prisma

  beforeEach(() => {
    prisma = new PrismaClient()
  })
  it('Test1', async () => {
    const users = await prisma.user.findMany()
    expect(users.length).toEqual(2)
  })
})
