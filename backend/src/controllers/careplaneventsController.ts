import { Request, Response } from 'express';
  import CareplaneventsModel from '../models/CareplaneventsModel';
  
  // Get all careplaneventss
  export const getAllCareplanevents = async (req: Request, res: Response) => {
    try {
      const items = await CareplaneventsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a careplanevents by ID
  export const getCareplaneventsById = async (req: Request, res: Response) => {
    try {
      const item = await CareplaneventsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Careplanevents not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new careplanevents
  export const createCareplanevents = async (req: Request, res: Response) => {
    const newItem = new CareplaneventsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a careplanevents by ID
  export const updateCareplanevents = async (req: Request, res: Response) => {
    try {
      const updatedItem = await CareplaneventsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Careplanevents not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a careplanevents by ID
  export const deleteCareplanevents = async (req: Request, res: Response) => {
    try {
      const deletedItem = await CareplaneventsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Careplanevents not found' });
      res.status(200).json({ message: 'Careplanevents deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };