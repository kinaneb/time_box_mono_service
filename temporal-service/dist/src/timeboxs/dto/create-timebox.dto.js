"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimeboxDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const createTimeboxSchema = z_1.z.object({
    id: z_1.z.number(),
    title: z_1.z.string().optional(),
});
class CreateTimeboxDto extends (0, nestjs_zod_1.createZodDto)(createTimeboxSchema) {
}
exports.CreateTimeboxDto = CreateTimeboxDto;
//# sourceMappingURL=create-timebox.dto.js.map