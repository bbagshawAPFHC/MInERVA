import { Request, Response } from 'express';
  import PerinatalhistoryModel from '../models/PerinatalhistoryModel';
  
  // Get all perinatalhistorys
  export const getAllPerinatalhistory = async (req: Request, res: Response) => {
    try {
      const items = await PerinatalhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a perinatalhistory by ID
  export const getPerinatalhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await PerinatalhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Perinatalhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new perinatalhistory
  export const createPerinatalhistory = async (req: Request, res: Response) => {
    const newItem = new PerinatalhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a perinatalhistory by ID
  export const updatePerinatalhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await PerinatalhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Perinatalhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a perinatalhistory by ID
  export const deletePerinatalhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await PerinatalhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Perinatalhistory not found' });
      res.status(200).json({ message: 'Perinatalhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };