import prisma from "./prisma";

export const createParticipant = async (userId: string) => {
    const participant = await prisma.participant.create({
        data: {
            user_id: userId
        }
    });
    return participant;
}