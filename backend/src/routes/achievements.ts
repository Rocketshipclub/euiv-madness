import express from 'express';
import { getAchievements, getAchievement, getAchievementsForCountry } from '../services/achievementService';

const router = express.Router();

router.get('/', async (req, res) => {
    const achievements = await getAchievements();
    res.json(achievements).status(200);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const achievement = await getAchievement(id);
    res.json(achievement).status(200);
});

router.get('/country/:id', async (req, res) => {
    const { id } = req.params;
    const achievements = await getAchievementsForCountry(id);
    res.json(achievements).status(200);
})

export { router as achievementsRoutes };