import { Request, Response } from 'express';
  import EncountersModel from '../models/EncountersModel';
  
  // Get all encounterss
  export const getAllEncounters = async (req: Request, res: Response) => {
    try {
      const items = await EncountersModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a encounters by ID
  export const getEncountersById = async (req: Request, res: Response) => {
    try {
      const item = await EncountersModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Encounters not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new encounters
  export const createEncounters = async (req: Request, res: Response) => {
    const newItem = new EncountersModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a encounters by ID
  export const updateEncounters = async (req: Request, res: Response) => {
    try {
      const updatedItem = await EncountersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Encounters not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a encounters by ID
  export const deleteEncounters = async (req: Request, res: Response) => {
    try {
      const deletedItem = await EncountersModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Encounters not found' });
      res.status(200).json({ message: 'Encounters deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };