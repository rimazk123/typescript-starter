import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function starter() {
  const createManyCourses = await prisma.course.createMany({
    data: [
      {
        title: 'Intro to Programming',
        label: 'ENGR 101',
      },
      {
        title: 'Intro to Data Structures',
        label: 'EECS 280',
      },
      {
        title: 'Discrete Math',
        label: 'EECS 203',
      },
    ],
  });
  const createManyUsers = await prisma.user.createMany({
    data: [
      {
        name: 'rimaz',
        email: 'rimazk@umich.edu',
      },
      {
        name: 'neil',
        email: 'ngur@umich.edu',
      },
    ],
  });
  const createManySchedules = await prisma.schedule.createMany({
    data: [
      {
        semester: 'F19',
        userId: 1,
      },
      {
        semester: 'W20',
        userId: 1,
      },
    ],
  });
  prisma.schedule.update({
    where: { id: 1 },
    data: {
      Course: { set: [{ id: 1 }, { id: 2 }] },
    },
  });
}
