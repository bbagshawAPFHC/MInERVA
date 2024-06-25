import { Request, Response } from 'express';
  import PatientcasesModel from '../models/PatientcasesModel';
  
  // Get all patientcasess
  export const getAllPatientcases = async (req: Request, res: Response) => {
    try {
      const items = await PatientcasesModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a patientcases by ID
  export const getPatientcasesById = async (req: Request, res: Response) => {
    try {
      const item = await PatientcasesModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Patientcases not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new patientcases
  export const createPatientcases = async (req: Request, res: Response) => {
    const newItem = new PatientcasesModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a patientcases by ID
  export const updatePatientcases = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PatientcasesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Patientcases not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a patientcases by ID
  export const deletePatientcases = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PatientcasesModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Patientcases not found' });
      res.status(200).json({ message: 'Patientcases deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };