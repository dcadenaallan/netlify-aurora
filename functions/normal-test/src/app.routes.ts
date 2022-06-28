import {Request, Response, Router} from "express";
import {PrismaClient} from "@prisma/client";

export class AppRoutes {
  static create(router: Router) {
    router.get('/', async (req: Request, res: Response) => {
      const prismaClient = new PrismaClient()
      const data = await prismaClient.user.findMany()
      res.json({data})
    })
  }
}
