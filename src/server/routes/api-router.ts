import bodyParser from 'body-parser';
import { Router } from 'express';
import { users, getUserById } from '../db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/schedules', async (req, res) => {
    const schedules = await prisma.schedule.findMany();
    res.json(schedules);
  });

  router.get('/api/courses', async (req, res) => {
    const courses = await prisma.course.findMany();
    res.json(courses);
  });

  router.get('/api/users', (req, res) => {
    res.json(users);
  });

  router.get('/api/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.json(getUserById(userId));
  });

  router.post('/api/set-user', (req, res) => {
    res.send(`ok`);
  });

  return router;
}
