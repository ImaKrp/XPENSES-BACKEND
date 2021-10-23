"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const TransactionsController_1 = require("./controllers/TransactionsController");
const ensureAuthenticated_1 = require("./middleWare/ensureAuthenticated");
const router = (0, express_1.Router)();
exports.router = router;
//User
router.post("/authenticate", new UserController_1.UserController().authenticate);
router.post("/register", new UserController_1.UserController().create);
router.put("/updateUser", ensureAuthenticated_1.ensureAuthenticated, new UserController_1.UserController().update);
//Transactions
router.post("/transaction", ensureAuthenticated_1.ensureAuthenticated, new TransactionsController_1.TransactionsController().create);
router.delete("/transaction/delete", ensureAuthenticated_1.ensureAuthenticated, new TransactionsController_1.TransactionsController().delete);
router.get("/transaction/list", ensureAuthenticated_1.ensureAuthenticated, new TransactionsController_1.TransactionsController().list);
