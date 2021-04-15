import express from 'express';
import { getIdeagroup, getIdeagroups, getIdeagroupsFromCategory } from '../services/ideagroupService';

const router = express.Router();

router.get('/', async (req, res) => {
    const ideagroups = await getIdeagroups();
    res.json(ideagroups).status(200);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const country = await getIdeagroup(id);
    res.json(country).status(200);
});

router.get('/group/:id', async (req, res) => {
    const { id } = req.params;
    const ideagroups = await getIdeagroupsFromCategory(id);
    res.json(ideagroups).status(200);
});

export { router as ideagroupRoutes };