import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/database';
import { azureAdMiddleware } from './middleware/azureAdMiddleware';
import patientRoutes from './routes/patientRoutes';

const app = express();
const port = process.env.PORT || 3001;  // Changed default port to 3001

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use('/api/patients', patientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
