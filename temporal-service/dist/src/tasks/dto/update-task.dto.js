"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskDto = void 0;
const create_task_dto_1 = require("./create-task.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateTaskDto extends (0, swagger_1.OmitType)(create_task_dto_1.CreateTaskDto, [
    'timebox',
    'timeslot',
    'createdBy',
]) {
}
exports.UpdateTaskDto = UpdateTaskDto;
//# sourceMappingURL=update-task.dto.js.map