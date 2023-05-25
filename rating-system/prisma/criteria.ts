import prisma from "./prisma";

export const createCriteria = async (title: string, description: string) => {
    const criteria = await prisma.criteria.create({
        data: {
            title,
            description,
        },
    });
    return criteria;
}

export const getCriterias = async () => {
    const criterias = await prisma.criteria.findMany();
    return criterias;
}