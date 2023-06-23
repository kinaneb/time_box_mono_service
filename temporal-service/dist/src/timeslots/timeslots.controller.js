"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeslotsController = void 0;
const common_1 = require("@nestjs/common");
const timeslots_service_1 = require("./timeslots.service");
const create_timeslot_dto_1 = require("./dto/create-timeslot.dto");
const update_timeslot_dto_1 = require("./dto/update-timeslot.dto");
let TimeslotsController = class TimeslotsController {
    constructor(timeslotsService) {
        this.timeslotsService = timeslotsService;
    }
    create(createTimeslotDto) {
        return this.timeslotsService.create(createTimeslotDto);
    }
    findAll() {
        return this.timeslotsService.findAll();
    }
    findOne(uuid) {
        return this.timeslotsService.findOne(uuid);
    }
    update(uuid, updateTimeslotDto) {
        return this.timeslotsService.update(uuid, updateTimeslotDto);
    }
    remove(uuid) {
        return this.timeslotsService.remove(uuid);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_timeslot_dto_1.CreateTimeslotDto]),
    __metadata("design:returntype", void 0)
], TimeslotsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TimeslotsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimeslotsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_timeslot_dto_1.UpdateTimeslotDto]),
    __metadata("design:returntype", void 0)
], TimeslotsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimeslotsController.prototype, "remove", null);
TimeslotsController = __decorate([
    (0, common_1.Controller)('timeslots'),
    __metadata("design:paramtypes", [timeslots_service_1.TimeslotsService])
], TimeslotsController);
exports.TimeslotsController = TimeslotsController;
//# sourceMappingURL=timeslots.controller.js.map