import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TimeslotsModule } from './timeslots/timeslots.module';
import { TimeboxsModule } from './timeboxs/timeboxs.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [
    TasksModule,
    TimeslotsModule,
    TimeboxsModule,
    PrismaModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
