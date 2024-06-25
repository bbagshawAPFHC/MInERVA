import { Request, Response } from 'express';
  import PatientModel from '../models/PatientModel';
  
  // Get all patients
  export const getAllPatient = async (req: Request, res: Response) => {
    try {
      const items = await PatientModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a patient by ID
  export const getPatientById = async (req: Request, res: Response) => {
    try {
      const item = await PatientModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Patient not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new patient
  export const createPatient = async (req: Request, res: Response) => {
    const newItem = new PatientModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a patient by ID
  export const updatePatient = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PatientModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Patient not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a patient by ID
  export const deletePatient = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PatientModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Patient not found' });
      res.status(200).json({ message: 'Patient deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };