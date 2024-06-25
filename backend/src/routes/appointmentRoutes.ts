import express from 'express';
  import { getAllAppointment, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } from '../controllers/appointmentController';
  
  const router = express.Router();
  
  router.get('/appointment', getAllAppointment);
  router.get('/appointment/:id', getAppointmentById);
  router.post('/appointment', createAppointment);
  router.put('/appointment/:id', updateAppointment);
  router.delete('/appointment/:id', deleteAppointment);
  
  export default router;