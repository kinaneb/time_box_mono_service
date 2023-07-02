import {ForbiddenException, Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UsersService} from "../../users/users.service";
import {Request} from "express";
import {RefreshTokensService} from "../../refresh-tokens/refresh-tokens.service";
import {CreateRefreshTokenDto} from "../../refresh-tokens/dto";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {

    constructor(
        private usersService: UsersService,
        private refreshTokenService: RefreshTokensService) {
        super(
            {
                secretOrKey: process.env.REFRESH_TOKEN_AUTH_SERVICE_SECRET,
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true
            }
        );
    }
    async validate(req: Request, payload: CreateRefreshTokenDto) {
        const clientIp = req.ip;
        const refreshToken = req.headers.authorization;
        const user = await this.usersService.findUserById({id: payload.userId});
        if (!user) {
            throw new ForbiddenException('Invalid token:  User not found');
        }
        if(!refreshToken) {
            throw new ForbiddenException('Invalid token: Refresh token not found');
        }
        const refreshTokenExists = await this.refreshTokenService.find(
            {userId: payload.userId, deviceIp: clientIp});
        if(!refreshTokenExists) {
            throw new ForbiddenException('Invalid token: refreshTokenExists token not found');
        }
        if (refreshTokenExists.refreshToken !== refreshToken) {
            throw new ForbiddenException('Invalid token: Refresh token mismatch');
        }
        if (refreshTokenExists.deviceIp !== clientIp) {
            console.log('payload.deviceIp: ', payload.deviceIp, 'clientIp: ', clientIp);
            throw new ForbiddenException('Invalid token: Ip address mismatch');
        }

        const updatesRefreshToken = await this.refreshTokenService.updateRefreshToken(
            {
                userId: payload.userId,
                deviceIp: clientIp,
                blacklisted: true,
                refreshToken: refreshTokenExists.refreshToken,
                createdAt: new Date()
            });

        req.headers.authorization = 'Bearer ';
        return {
            userId: payload.userId,
            refreshToken: refreshToken.split(' ')[1] ,
            deviceIp: clientIp
        }
    }
}