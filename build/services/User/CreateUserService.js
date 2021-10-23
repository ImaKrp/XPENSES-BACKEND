"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateUserService {
    async execute(email, password) {
        let user = await prisma_1.default.user.findFirst({
            where: {
                email: email,
            },
        });
        if (user) {
            return { error: "email", code: 400 };
        }
        if (!user) {
            user = await prisma_1.default.user.create({
                data: {
                    email: email,
                    password: password,
                },
            });
        }
        return { user };
    }
}
exports.CreateUserService = CreateUserService;
