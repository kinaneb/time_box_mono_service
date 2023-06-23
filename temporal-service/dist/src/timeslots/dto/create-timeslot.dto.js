"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimeslotDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const createTimeslotSchema = z_1.z.object({
    startAt: z_1.z.date(),
    duration: z_1.z.date(),
});
class CreateTimeslotDto extends (0, nestjs_zod_1.createZodDto)(createTimeslotSchema) {
}
exports.CreateTimeslotDto = CreateTimeslotDto;
//# sourceMappingURL=create-timeslot.dto.js.map