// backend/src/index.ts
import { config } from 'dotenv';
config();

import express from 'express';
import { azureAdMiddleware } from './middleware/azureAdMiddleware';
import patientRoutes from './routes/patientRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/patients', patientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
