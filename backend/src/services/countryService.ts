import { PrismaClient } from '@prisma/client';
import { Country } from '../model/country';
const prisma = new PrismaClient();

export const getCountries = async () => {
    const countries: Array<Country> = await prisma.countries.findMany();
    return countries;
}

export const getCountry = async (id: string) => {
    const country: Country = await prisma.countries.findUnique({
        where: {
            id: Number(id)
        }
    });

    return country;
}

export const getCountriesFromContinent = async (continent: number) => {
    const countries: Array<Country> = await prisma.countries.findMany({
        where: {
            continent: continent
        }
    });
    return countries;
}