import { app } from './config/app';

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
