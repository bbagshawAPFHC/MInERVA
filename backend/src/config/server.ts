import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import demographicRoutes from '../routes/demographicRoutes';
import connectDB from './database'; // Import the database connection function

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS with customized options BEFORE defining routes
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

app.use(json());
app.use(urlencoded({ extended: true }));
app.options('*', cors()); 

app.use('/api/demographic', demographicRoutes);

//Error Handling Middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack); 
  res.status(500).json({ message: 'Something went wrong!' }); 
});

// Start the server AFTER connecting to MongoDB
(async () => {
  try {
    await connectDB();  
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
})(); 
