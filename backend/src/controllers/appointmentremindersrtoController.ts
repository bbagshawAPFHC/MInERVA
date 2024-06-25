import { Request, Response } from 'express';
  import AppointmentremindersrtoModel from '../models/AppointmentremindersrtoModel';
  
  // Get all appointmentremindersrtos
  export const getAllAppointmentremindersrto = async (req: Request, res: Response) => {
    try {
      const items = await AppointmentremindersrtoModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a appointmentremindersrto by ID
  export const getAppointmentremindersrtoById = async (req: Request, res: Response) => {
    try {
      const item = await AppointmentremindersrtoModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Appointmentremindersrto not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new appointmentremindersrto
  export const createAppointmentremindersrto = async (req: Request, res: Response) => {
    const newItem = new AppointmentremindersrtoModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a appointmentremindersrto by ID
  export const updateAppointmentremindersrto = async (req: Request, res: Response) => {
    try {
      const updatedItem = await AppointmentremindersrtoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Appointmentremindersrto not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a appointmentremindersrto by ID
  export const deleteAppointmentremindersrto = async (req: Request, res: Response) => {
    try {
      const deletedItem = await AppointmentremindersrtoModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Appointmentremindersrto not found' });
      res.status(200).json({ message: 'Appointmentremindersrto deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };