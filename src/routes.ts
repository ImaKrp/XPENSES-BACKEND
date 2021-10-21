import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { TransactionsController } from "./controllers/TransactionsController";
import { ensureAuthenticated } from "./middleWare/ensureAuthenticated";

const router = Router();

//User

router.post("/authenticate", new UserController().authenticate);

router.post("/register", new UserController().create);

router.put("/updateUser", ensureAuthenticated, new UserController().update);


//Transactions

router.post(
  "/transaction",
  ensureAuthenticated,
  new TransactionsController().create
);

router.delete(
  "/transaction",
  ensureAuthenticated,
  new TransactionsController().delete
);

router.get(
  "/transaction/list",
  ensureAuthenticated,
  new TransactionsController().list
);

export { router };
