import { Request, Response } from 'express';
  import MedicationrequestModel from '../models/MedicationrequestModel';
  
  // Get all medicationrequests
  export const getAllMedicationrequest = async (req: Request, res: Response) => {
    try {
      const items = await MedicationrequestModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a medicationrequest by ID
  export const getMedicationrequestById = async (req: Request, res: Response) => {
    try {
      const item = await MedicationrequestModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Medicationrequest not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new medicationrequest
  export const createMedicationrequest = async (req: Request, res: Response) => {
    const newItem = new MedicationrequestModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a medicationrequest by ID
  export const updateMedicationrequest = async (req: Request, res: Response) => {
    try {
      const updatedItem = await MedicationrequestModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Medicationrequest not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a medicationrequest by ID
  export const deleteMedicationrequest = async (req: Request, res: Response) => {
    try {
      const deletedItem = await MedicationrequestModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Medicationrequest not found' });
      res.status(200).json({ message: 'Medicationrequest deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };