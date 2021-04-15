import { PrismaClient } from '@prisma/client';
import { Achievement } from '../model/achievement';
const prisma = new PrismaClient();

export const getAchievements = async () => {
    const achievements = await prisma.achievements.findMany();
    return achievements;
}

export const getAchievement = async (id: string) => {
    const achievement: Achievement = await prisma.achievements.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            name: true,
            summary: true,
            isGeneric: false
        }
    });

    return achievement;
}

export const getGenericAchievements = async () => {
    const achievements: Array<Achievement> = await prisma.achievements.findMany({
        where: {
            isGeneric: 1
        },
        select: {
            id: true,
            name: true,
            summary: true,
            isGeneric: false
        }
    });

    return achievements;
}

export const getAchievementsForCountry = async (id: string) => {
    const achievements: Array<Achievement> = await prisma.achievements.findMany({
        where: {
            AchievementCountry: {
                some: {
                    countryId: Number(id)
                }
            },
        },
        select: {
            id: true,
            name: true,
            summary: true,
            isGeneric: false
        }
    });

    return achievements;
}

export const getAchievementsForChallenge = async (id: string) => {
    const specific = await getAchievementsForCountry(id);
    const generic = await getGenericAchievements();
    return specific.concat(generic);
}