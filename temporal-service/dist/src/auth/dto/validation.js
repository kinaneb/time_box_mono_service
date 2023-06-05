"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AuthSchemaValidation = zod_1.z.object({
    username: zod_1.z.string().min(2),
    password: zod_1.z.string().min(6).max(8)
});
//# sourceMappingURL=validation.js.map