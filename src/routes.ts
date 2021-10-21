import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTransactionController } from "./controllers/CreateTransactionController";
import { ensureAuthenticated } from "./middleWare/ensureAuthenticated";
import { GetAllTransactionsController } from "./controllers/GetAllTransactionsController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/register", new CreateUserController().handle);

router.post(
  "/transaction",
  ensureAuthenticated,
  new CreateTransactionController().handle
);

router.get(
  "/transaction/list",
  ensureAuthenticated,
  new GetAllTransactionsController().handle
);

export { router };
