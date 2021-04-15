import express from 'express';
import { getCountries, getCountry, getCountriesFromContinent } from '../services/countryService';

const router = express.Router();

router.get('/', async (req, res) => {
    const countries = await getCountries();
    res.json(countries).status(200);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const country = await getCountry(id);
    res.json(country).status(200);
});

router.get('/continent/:id', async (req, res) => {
    const { id } = req.params;
    const countries = await getCountriesFromContinent(parseInt(id));
    res.json(countries).status(200);
});

export { router as countryRoutes };