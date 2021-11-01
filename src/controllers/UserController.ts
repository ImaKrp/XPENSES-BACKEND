import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/User/AuthenticateUserService";
import { CreateUserService } from "../services/User/CreateUserService";
import { UpdateUserService } from "../services/User/UpdateUserService";

class UserController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new AuthenticateUserService();
    try {
      const result = await service.execute(email, password);
      return res.json(result);
    } catch (err) {
      return res
        .status(err.code ?? 401)
        .json({ error: err.error ?? err.message });
    }
  }
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new CreateUserService();
    try {
      const result = await service.execute(email, password);
      return res.json(result);
    } catch (err) {
      return res
        .status(err.code ?? 401)
        .json({ error: err.error ?? err.message });
    }
  }
  async update(req: Request, res: Response) {
    const { user_id } = req;
    const { region, email, password } = req.body;

    const service = new UpdateUserService();
    try {
      const result = await service.execute(user_id, region, email, password);
      return res.json(result);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export { UserController };
