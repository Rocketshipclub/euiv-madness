import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { countryRoutes } from '../routes/countries';
import { achievementsRoutes } from '../routes/achievements';
import { ideagroupRoutes } from '../routes/ideagroups';
import { challengeRoutes } from '../routes/challenges';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/countries', countryRoutes);
app.use('/api/achievements', achievementsRoutes);
app.use('/api/ideagroups', ideagroupRoutes);
app.use('/api/challenges', challengeRoutes);

app.use(express.static(path.join("../frontend", 'build')))
app.get('*', (req, res, next) => res.sendFile(path.join('frontend','build','index.html'), {root: '../'}));

export { app };
