import { Challenge } from '../model/challenge';
import { ChallengeBody } from '../model/challengeBody';
import { getAchievementsForChallenge } from './achievementService';
import { getCountries } from './countryService';
import { getIdeaGroupsForChallenge } from './ideagroupService';

import { Country } from '../model/country';
import { IdeaGroup } from '../model/ideaGroup';
import { Achievement } from '../model/achievement';

// User can select their desired continents

// User can request for new achievements (all three)
// User can request for new achievement (single achievement)

// User will receive a country, 3 achievements that fit with it and selected number of idea groups to take first (in order)

export const generate = async (body: ChallengeBody) => {
    const continents: Array<number> = body.continents;
    const country = await randomizeCountry(continents);
    const ideagroups = await randomizeIdeagroups();
    const achievements = await randomizeAchievements(country.id);
    const challenge: Challenge = new ChallengeImpl(country, ideagroups, achievements);
    return challenge;
}

const randomizeCountry = async (continents: Array<number>) => {
    const countries = await getCountries();
    const countriesMatchingContinents = countries.filter(country => continents.includes(country.continent));
    const randomizedCountry = countriesMatchingContinents[Math.floor(Math.random() * countriesMatchingContinents.length)];
    return randomizedCountry;
}

const randomizeIdeagroups = async () => {
    let ideagroups = await getIdeaGroupsForChallenge();
    ideagroups = sort(ideagroups);
    return ideagroups;
}

const randomizeAchievements = async (id: number) => {
    let achievements = await getAchievementsForChallenge(id.toString());
    achievements = sort(achievements).slice(0, 3);
    return achievements;
}

const sort = (array: Array<any>) => {
    // Randomize the array
    // https://stackoverflow.com/a/18650169 as explained here, not a perfect solution but works for this case
    return array.sort(() => .5 - Math.random());
}

class ChallengeImpl implements Challenge {
    country: Country;
    ideaGroups: Array<IdeaGroup>;
    achievements: Array<Achievement>;
    constructor(country: Country, ideagroups: Array<IdeaGroup>, achievements: Array<Achievement>) {
        this.country = country,
        this.ideaGroups = ideagroups,
        this.achievements = achievements
    }
}