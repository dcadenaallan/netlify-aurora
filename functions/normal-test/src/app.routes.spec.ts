import {PrismaClient} from "@prisma/client";

describe('AppRoutes', () => {
  let prisma

  beforeEach(async () => {
    prisma = new PrismaClient()
    await prisma.$executeRaw`insert into User (id, createdAt, email, name)
                             values (1, '2022-06-28 15:24:10.491', 'test1@test.com', 'Test One'),
                                    (2, '2022-06-28 15:47:33.851', 'test2@test.com', 'Test Two');`
  })
  it('Test1', async () => {
    const users = await prisma.user.findMany()
    expect(users.length).toEqual(2)
  })
})
