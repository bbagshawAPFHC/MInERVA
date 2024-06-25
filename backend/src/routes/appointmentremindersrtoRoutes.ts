import express from 'express';
  import { getAllAppointmentremindersrto, getAppointmentremindersrtoById, createAppointmentremindersrto, updateAppointmentremindersrto, deleteAppointmentremindersrto } from '../controllers/appointmentremindersrtoController';
  
  const router = express.Router();
  
  router.get('/appointmentremindersrto', getAllAppointmentremindersrto);
  router.get('/appointmentremindersrto/:id', getAppointmentremindersrtoById);
  router.post('/appointmentremindersrto', createAppointmentremindersrto);
  router.put('/appointmentremindersrto/:id', updateAppointmentremindersrto);
  router.delete('/appointmentremindersrto/:id', deleteAppointmentremindersrto);
  
  export default router;