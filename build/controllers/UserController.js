"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const AuthenticateUserService_1 = require("../services/User/AuthenticateUserService");
const CreateUserService_1 = require("../services/User/CreateUserService");
const UpdateUserService_1 = require("../services/User/UpdateUserService");
class UserController {
    async authenticate(req, res) {
        const { email, password } = req.body;
        const service = new AuthenticateUserService_1.AuthenticateUserService();
        try {
            const result = await service.execute(email, password);
            if (result.code === 400)
                return res.status(400).json({ error: result.error });
            return res.json(result);
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
    async create(req, res) {
        const { email, password } = req.body;
        const service = new CreateUserService_1.CreateUserService();
        try {
            const result = await service.execute(email, password);
            if (result.code === 400)
                return res.status(400).json({ error: result.error });
            return res.json(result);
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
    async update(req, res) {
        const { user_id } = req;
        const { region, email, password } = req.body;
        const service = new UpdateUserService_1.UpdateUserService();
        try {
            const result = await service.execute(user_id, region, email, password);
            return res.json(result);
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
}
exports.UserController = UserController;
