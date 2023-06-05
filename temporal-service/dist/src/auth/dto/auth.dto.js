"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
const AuthDtoSchema = zod_1.z.object({
    username: zod_1.z.string().min(2).max(10),
    password: zod_1.z.string().min(6).max(8)
});
class AuthDto extends (0, nestjs_zod_1.createZodDto)(AuthDtoSchema) {
}
exports.AuthDto = AuthDto;
//# sourceMappingURL=auth.dto.js.map