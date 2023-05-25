import prisma from "./prisma";

export const createSession = async (name: string) => {
    const session = await prisma.session.create({
        data: {
            name,
        },
    });
    return session;
};

export const getSessions = async () => {
    const sessions = await prisma.session.findMany();
    return sessions;
}