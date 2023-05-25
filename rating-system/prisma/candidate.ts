import prisma from "./prisma";

export const createCandidate = async (userId: string) => {
    const candidate = await prisma.candidate.create({
        data: {
            user_id: userId
        }
    });
    return candidate;
}