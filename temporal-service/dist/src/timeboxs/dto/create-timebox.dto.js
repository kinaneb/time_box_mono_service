"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimeboxDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const createTimeboxSchema = z_1.z.object({
    createdBy: z_1.z.string(),
    title: z_1.z.string(),
});
class CreateTimeboxDto extends (0, nestjs_zod_1.createZodDto)(createTimeboxSchema) {
}
exports.CreateTimeboxDto = CreateTimeboxDto;
//# sourceMappingURL=create-timebox.dto.js.map