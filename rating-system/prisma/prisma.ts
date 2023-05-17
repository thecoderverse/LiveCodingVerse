import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
    ],
})

prisma.$on("query", (e: Prisma.QueryEvent) => {
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
});

prisma.$on("beforeExit", () => {
    console.log("Disconnecting Prisma Client");
    prisma.$disconnect();
});

export default prisma