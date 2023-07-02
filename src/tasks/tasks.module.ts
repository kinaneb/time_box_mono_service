import { Global, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TasksRepository } from './tasks.repository';

@Global()
@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  imports: [],
  exports: [TasksService, TasksRepository]
})
export class TasksModule {}
