import { Request, Response } from 'express';
  import ObhistoryModel from '../models/ObhistoryModel';
  
  // Get all obhistorys
  export const getAllObhistory = async (req: Request, res: Response) => {
    try {
      const items = await ObhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a obhistory by ID
  export const getObhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await ObhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Obhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new obhistory
  export const createObhistory = async (req: Request, res: Response) => {
    const newItem = new ObhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a obhistory by ID
  export const updateObhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ObhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Obhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a obhistory by ID
  export const deleteObhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ObhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Obhistory not found' });
      res.status(200).json({ message: 'Obhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };