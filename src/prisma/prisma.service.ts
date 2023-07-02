import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
  constructor(){
    super({
      datasources: {
        db: {
          url: 'postgresql://nest_user:password@temporal-service-db:5432/nest_db'
        }
      }
    })
  }
}