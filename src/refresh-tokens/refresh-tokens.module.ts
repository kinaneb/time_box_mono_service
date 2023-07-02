import { Module } from '@nestjs/common';
import { RefreshTokensService } from './refresh-tokens.service';
import {JwtService} from "@nestjs/jwt";

@Module({
  providers: [RefreshTokensService, JwtService],
  exports: [RefreshTokensService]
})
export class RefreshTokensModule {}
