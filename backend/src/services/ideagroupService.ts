import { PrismaClient } from '@prisma/client';
import { IdeaGroup } from '../model/ideaGroup';
const prisma = new PrismaClient();

export const getIdeagroups = async () => {
    const ideagroups = await prisma.ideagroups.findMany();
    return ideagroups;
}

export const getIdeagroup = async (id: string) => {
    const ideagroup: IdeaGroup = await prisma.ideagroups.findUnique({
        where: {
            id: Number(id)
        }
    });

    return ideagroup;
}

export const getRandomIdeagroupFromCategory = async (category: string) => {
    const randomGroups: Array<IdeaGroup> = await getIdeagroupsFromCategory(category);
    return randomGroups[Math.floor(Math.random() * randomGroups.length)];
}

export const getIdeagroupsFromCategory = async (category: string) => {
    const ideagroups: Array<IdeaGroup> = await prisma.ideagroups.findMany({
        where: {
            group: String(category)
        }
    });

    return ideagroups;
}

export const getIdeaGroupsForChallenge = async () => {
    const ideagroups = Array<IdeaGroup>();
    ideagroups.push(await getRandomIdeagroupFromCategory("Administrative"));
    ideagroups.push(await getRandomIdeagroupFromCategory("Diplomatic"));
    ideagroups.push(await getRandomIdeagroupFromCategory("Military"));
    
    return ideagroups;
}