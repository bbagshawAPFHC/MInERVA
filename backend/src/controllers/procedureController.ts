import { Request, Response } from 'express';
  import ProcedureModel from '../models/ProcedureModel';
  
  // Get all procedures
  export const getAllProcedure = async (req: Request, res: Response) => {
    try {
      const items = await ProcedureModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a procedure by ID
  export const getProcedureById = async (req: Request, res: Response) => {
    try {
      const item = await ProcedureModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Procedure not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new procedure
  export const createProcedure = async (req: Request, res: Response) => {
    const newItem = new ProcedureModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a procedure by ID
  export const updateProcedure = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ProcedureModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Procedure not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a procedure by ID
  export const deleteProcedure = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ProcedureModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Procedure not found' });
      res.status(200).json({ message: 'Procedure deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };