import { Request, Response } from 'express';
  import AppointmentModel from '../models/AppointmentModel';
  
  // Get all appointments
  export const getAllAppointment = async (req: Request, res: Response) => {
    try {
      const items = await AppointmentModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a appointment by ID
  export const getAppointmentById = async (req: Request, res: Response) => {
    try {
      const item = await AppointmentModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Appointment not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new appointment
  export const createAppointment = async (req: Request, res: Response) => {
    const newItem = new AppointmentModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a appointment by ID
  export const updateAppointment = async (req: Request, res: Response) => {
    try {
      const updatedItem = await AppointmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Appointment not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a appointment by ID
  export const deleteAppointment = async (req: Request, res: Response) => {
    try {
      const deletedItem = await AppointmentModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Appointment not found' });
      res.status(200).json({ message: 'Appointment deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };