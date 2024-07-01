import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/database';
import { azureAdMiddleware } from './middleware/azureAdMiddleware';
import demographicRoutes from './routes/demographicRoutes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;  // Changed default port to 3001

// Connect to MongoDB
connectDB();

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true
}));

app.use(express.json());
app.use('/api/patients', demographicRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
