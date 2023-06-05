import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    const timebox = await prisma.timebox.create({
        data: {
          title: 'Test',
          createdBy: 'Julie'

        },
    })

    const timeslot = await prisma.timeslot.create({
        data: {
          startAt: new Date(),
          duration: new Date()
        }
    })

    const task = await prisma.task.create({
      data: {
        title: 'Do a laundry',
        state: 'NOT_ASSIGNED',
        createdBy: 'Julie',
        priority: 'HIGH',
        timebox: { connect : { id : 1}},
        timeboxslot: { connect : { id : 1}},
      }
    })

    console.log(timebox, timeslot, task);
    
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });