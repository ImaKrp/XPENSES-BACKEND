"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUserService {
    async execute(email, password) {
        let user = await prisma_1.default.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            return { error: "email", code: 400 };
        }
        if (user.password !== password) {
            return { error: "password", code: 400 };
        }
        const token = (0, jsonwebtoken_1.sign)({
            user: {
                email: user.email,
                id: user.id,
            },
        }, process.env.JWT_SECRET, {
            subject: user.id,
        });
        return { token, user };
    }
}
exports.AuthenticateUserService = AuthenticateUserService;
