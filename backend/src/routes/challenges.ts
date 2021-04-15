import express from 'express';
import { ChallengeBody } from '../model/challengeBody';
import { generate } from '../services/challengeService';

const router = express.Router();
router.post('/', async(req, res) => {
    const challengeBody: ChallengeBody = req.body;
    const challenge = await generate(challengeBody);
    res.json(challenge).status(201);
});

export { router as challengeRoutes }