import express from 'express';
import patientRoutes from '../routes/patientRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware and other route setups
app.use(express.json());
app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
