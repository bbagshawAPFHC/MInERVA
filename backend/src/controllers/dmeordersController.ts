import { Request, Response } from 'express';
  import DmeordersModel from '../models/DmeordersModel';
  
  // Get all dmeorderss
  export const getAllDmeorders = async (req: Request, res: Response) => {
    try {
      const items = await DmeordersModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a dmeorders by ID
  export const getDmeordersById = async (req: Request, res: Response) => {
    try {
      const item = await DmeordersModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Dmeorders not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new dmeorders
  export const createDmeorders = async (req: Request, res: Response) => {
    const newItem = new DmeordersModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a dmeorders by ID
  export const updateDmeorders = async (req: Request, res: Response) => {
    try {
      const updatedItem = await DmeordersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Dmeorders not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a dmeorders by ID
  export const deleteDmeorders = async (req: Request, res: Response) => {
    try {
      const deletedItem = await DmeordersModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Dmeorders not found' });
      res.status(200).json({ message: 'Dmeorders deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };