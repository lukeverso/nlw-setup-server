import Fastify from "fastify";
import CORS from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(CORS);

app.get('/', async () => {
     const habits = await prisma.habit.findMany();

     return habits;
});

app.listen({
     port: 3333
}).then(() => {
     console.log('HTTP server running.');
});