import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new CreateUserService();
    try {
      const result = await service.execute(email, password);
      return res.json(result);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export { CreateUserController };
