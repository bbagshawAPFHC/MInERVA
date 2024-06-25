import { Request, Response } from 'express';
  import ScreeningModel from '../models/ScreeningModel';
  
  // Get all screenings
  export const getAllScreening = async (req: Request, res: Response) => {
    try {
      const items = await ScreeningModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a screening by ID
  export const getScreeningById = async (req: Request, res: Response) => {
    try {
      const item = await ScreeningModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Screening not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new screening
  export const createScreening = async (req: Request, res: Response) => {
    const newItem = new ScreeningModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a screening by ID
  export const updateScreening = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ScreeningModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Screening not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a screening by ID
  export const deleteScreening = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ScreeningModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Screening not found' });
      res.status(200).json({ message: 'Screening deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };