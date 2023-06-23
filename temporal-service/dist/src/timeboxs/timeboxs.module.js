"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeboxsModule = void 0;
const common_1 = require("@nestjs/common");
const timeboxs_service_1 = require("./timeboxs.service");
const timeboxs_controller_1 = require("./timeboxs.controller");
const timebox_repository_1 = require("./timebox.repository");
let TimeboxsModule = class TimeboxsModule {
};
TimeboxsModule = __decorate([
    (0, common_1.Module)({
        controllers: [timeboxs_controller_1.TimeboxsController],
        providers: [timeboxs_service_1.TimeboxsService, timebox_repository_1.TimeboxRepository]
    })
], TimeboxsModule);
exports.TimeboxsModule = TimeboxsModule;
//# sourceMappingURL=timeboxs.module.js.map