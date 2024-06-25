import { Request, Response } from 'express';
  import SurgicalhistoryModel from '../models/SurgicalhistoryModel';
  
  // Get all surgicalhistorys
  export const getAllSurgicalhistory = async (req: Request, res: Response) => {
    try {
      const items = await SurgicalhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a surgicalhistory by ID
  export const getSurgicalhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await SurgicalhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Surgicalhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new surgicalhistory
  export const createSurgicalhistory = async (req: Request, res: Response) => {
    const newItem = new SurgicalhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a surgicalhistory by ID
  export const updateSurgicalhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await SurgicalhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Surgicalhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a surgicalhistory by ID
  export const deleteSurgicalhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await SurgicalhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Surgicalhistory not found' });
      res.status(200).json({ message: 'Surgicalhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };