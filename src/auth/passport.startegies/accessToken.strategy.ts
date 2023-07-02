import {ExecutionContext, ForbiddenException, Injectable} from "@nestjs/common";
import {Request} from "express";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UsersService} from "../../users/users.service";
import {AccessJwtPayload} from "../dto";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(
        private usersService: UsersService) {
        super(
            {
                secretOrKey: process.env.ACCESS_TOKEN_AUTH_SERVICE_SECRET,
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true
            }
        );
    }
    async validate(req: Request, payload: AccessJwtPayload) {
        const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const user = await this.usersService.findUserById({id: payload.userId});
        if (!user) {
            throw new ForbiddenException('Invalid token:  User not found');
        }
        if (payload.deviceIp !== clientIp) {
            throw new ForbiddenException('Invalid token: Ip address mismatch');
        }
        return {
            userId: payload.userId,
            deviceIp: payload.deviceIp,
            ...user
        };
    }
}