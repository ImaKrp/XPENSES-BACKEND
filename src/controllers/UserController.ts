import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/User/AuthenticateUserService";
import { CreateUserService } from "../services/User/CreateUserService";
import { UpdateUserService } from "../services/User/UpdateUserService";

class UserController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const errors: String[] = [];
    !email && errors.push("Email");
    !password && errors.push("Password");

    if (errors.length !== 0) {
      return res.status(400).json({
        error:
          errors.length === 1
            ? `Field is required: ${errors[0]}`
            : `Fields are required: ${errors}`,
      });
    }

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

    const errors: String[] = [];
    !email && errors.push("Email");
    !password && errors.push("Password");

    if (errors.length !== 0) {
      return res.status(400).json({
        error:
          errors.length === 1
            ? `Field is required: ${errors[0]}`
            : `Fields are required: ${errors}`,
      });
    }

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

    if (!region && !email && !password) {
      return res.status(400).json({
        error: `Some field is required: Region, Email, Password`,
      });
    }

    const service = new UpdateUserService();
    try {
      const result = await service.execute(user_id, region, email, password);
      return res.json(result);
    } catch (err) {
      return res
        .status(err.code ?? 401)
        .json({ error: err.error ?? err.message });
    }
  }
}

export { UserController };
