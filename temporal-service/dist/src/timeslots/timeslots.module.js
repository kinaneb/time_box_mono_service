"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeslotsModule = void 0;
const common_1 = require("@nestjs/common");
const timeslots_service_1 = require("./timeslots.service");
const timeslots_controller_1 = require("./timeslots.controller");
const timeslot_repository_1 = require("./timeslot.repository");
let TimeslotsModule = class TimeslotsModule {
};
TimeslotsModule = __decorate([
    (0, common_1.Module)({
        controllers: [timeslots_controller_1.TimeslotsController],
        providers: [timeslots_service_1.TimeslotsService, timeslot_repository_1.TimeslotRepository],
    })
], TimeslotsModule);
exports.TimeslotsModule = TimeslotsModule;
//# sourceMappingURL=timeslots.module.js.map