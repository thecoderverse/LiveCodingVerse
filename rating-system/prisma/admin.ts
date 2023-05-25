import prisma from "./prisma";

export const createAdmin = async (userId: string) => {
    const admin = await prisma.admin.create({
        data: {
            user_id: userId
        }
    });
    return admin;
}