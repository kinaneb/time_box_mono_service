import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ZodValidationPipe } from 'nestjs-zod'
import { APP_PIPE } from '@nestjs/core'
import { TimeslotsModule } from './timeslots/timeslots.module';
import { TimeboxsModule } from './timeboxs/timeboxs.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TasksModule, TimeslotsModule, TimeboxsModule, PrismaModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
