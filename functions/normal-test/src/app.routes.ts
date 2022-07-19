import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

export class AppRoutes {
  static create(router: Router) {
    router.get("/", async (req: Request, res: Response) => {
      try {
        const prismaClient = new PrismaClient();
        const data = await prismaClient.user.findMany();
        console.log(data)
        res.json({ data });
      } catch (err) {
        console.error('From Function',err);
        res.status(400).json({ message: err.message });
      }
    });
  }
}
