import { Request, Response } from 'express';
  import EncountersummaryModel from '../models/EncountersummaryModel';
  
  // Get all encountersummarys
  export const getAllEncountersummary = async (req: Request, res: Response) => {
    try {
      const items = await EncountersummaryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a encountersummary by ID
  export const getEncountersummaryById = async (req: Request, res: Response) => {
    try {
      const item = await EncountersummaryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Encountersummary not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new encountersummary
  export const createEncountersummary = async (req: Request, res: Response) => {
    const newItem = new EncountersummaryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a encountersummary by ID
  export const updateEncountersummary = async (req: Request, res: Response) => {
    try {
      const updatedItem = await EncountersummaryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Encountersummary not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a encountersummary by ID
  export const deleteEncountersummary = async (req: Request, res: Response) => {
    try {
      const deletedItem = await EncountersummaryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Encountersummary not found' });
      res.status(200).json({ message: 'Encountersummary deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };