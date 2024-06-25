import { Request, Response } from 'express';
  import ProceduredocumentationModel from '../models/ProceduredocumentationModel';
  
  // Get all proceduredocumentations
  export const getAllProceduredocumentation = async (req: Request, res: Response) => {
    try {
      const items = await ProceduredocumentationModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a proceduredocumentation by ID
  export const getProceduredocumentationById = async (req: Request, res: Response) => {
    try {
      const item = await ProceduredocumentationModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Proceduredocumentation not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new proceduredocumentation
  export const createProceduredocumentation = async (req: Request, res: Response) => {
    const newItem = new ProceduredocumentationModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a proceduredocumentation by ID
  export const updateProceduredocumentation = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ProceduredocumentationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Proceduredocumentation not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a proceduredocumentation by ID
  export const deleteProceduredocumentation = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ProceduredocumentationModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Proceduredocumentation not found' });
      res.status(200).json({ message: 'Proceduredocumentation deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };