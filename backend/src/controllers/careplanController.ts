import { Request, Response } from 'express';
  import CareplanModel from '../models/CareplanModel';
  
  // Get all careplans
  export const getAllCareplan = async (req: Request, res: Response) => {
    try {
      const items = await CareplanModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a careplan by ID
  export const getCareplanById = async (req: Request, res: Response) => {
    try {
      const item = await CareplanModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Careplan not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new careplan
  export const createCareplan = async (req: Request, res: Response) => {
    const newItem = new CareplanModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a careplan by ID
  export const updateCareplan = async (req: Request, res: Response) => {
    try {
      const updatedItem = await CareplanModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Careplan not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a careplan by ID
  export const deleteCareplan = async (req: Request, res: Response) => {
    try {
      const deletedItem = await CareplanModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Careplan not found' });
      res.status(200).json({ message: 'Careplan deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };