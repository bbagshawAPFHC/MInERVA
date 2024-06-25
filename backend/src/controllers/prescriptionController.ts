import { Request, Response } from 'express';
  import PrescriptionModel from '../models/PrescriptionModel';
  
  // Get all prescriptions
  export const getAllPrescription = async (req: Request, res: Response) => {
    try {
      const items = await PrescriptionModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a prescription by ID
  export const getPrescriptionById = async (req: Request, res: Response) => {
    try {
      const item = await PrescriptionModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Prescription not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new prescription
  export const createPrescription = async (req: Request, res: Response) => {
    const newItem = new PrescriptionModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a prescription by ID
  export const updatePrescription = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PrescriptionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Prescription not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a prescription by ID
  export const deletePrescription = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PrescriptionModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Prescription not found' });
      res.status(200).json({ message: 'Prescription deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };