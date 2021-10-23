"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateUserService {
    async execute(user_id, region, email, password) {
        let data = {};
        if (email)
            data.email = email;
        if (region)
            data.region = region;
        if (password)
            data.password = password;
        const user = await prisma_1.default.user.update({
            where: {
                id: user_id,
            },
            data: Object.assign({}, data),
        });
        return user;
    }
}
exports.UpdateUserService = UpdateUserService;
