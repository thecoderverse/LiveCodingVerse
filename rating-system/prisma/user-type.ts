import { UserTypes } from "@prisma/client";
import { createAdmin } from "./admin";
import { createCandidate } from "./candidate";
import { createParticipant } from "./participant";
import prisma from "./prisma";

export const createDefaultUserType = async (userId: string) => {
    const userType = await prisma.userType.create({
        data: {
            user_id: userId,
        },
    });

    await createCandidate(userId)

    return userType;
}

export const getUserType = async (userId: string) => {
    const userType = await prisma.userType.findFirst({
        where: {
            user_id: userId,
        },
    });

    return userType;
}