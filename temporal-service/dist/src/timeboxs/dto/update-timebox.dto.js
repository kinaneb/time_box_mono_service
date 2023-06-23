"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimeboxDto = void 0;
const create_timebox_dto_1 = require("./create-timebox.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateTimeboxDto extends (0, swagger_1.OmitType)(create_timebox_dto_1.CreateTimeboxDto, [
    'createdBy',
]) {
}
exports.UpdateTimeboxDto = UpdateTimeboxDto;
//# sourceMappingURL=update-timebox.dto.js.map