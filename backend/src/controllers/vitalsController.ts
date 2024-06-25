import { Request, Response } from 'express';
  import VitalsModel from '../models/VitalsModel';
  
  // Get all vitalss
  export const getAllVitals = async (req: Request, res: Response) => {
    try {
      const items = await VitalsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a vitals by ID
  export const getVitalsById = async (req: Request, res: Response) => {
    try {
      const item = await VitalsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Vitals not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new vitals
  export const createVitals = async (req: Request, res: Response) => {
    const newItem = new VitalsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a vitals by ID
  export const updateVitals = async (req: Request, res: Response) => {
    try {
      const updatedItem = await VitalsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Vitals not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a vitals by ID
  export const deleteVitals = async (req: Request, res: Response) => {
    try {
      const deletedItem = await VitalsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Vitals not found' });
      res.status(200).json({ message: 'Vitals deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };