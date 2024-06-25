import { Request, Response } from 'express';
  import FamilyhistoryModel from '../models/FamilyhistoryModel';
  
  // Get all familyhistorys
  export const getAllFamilyhistory = async (req: Request, res: Response) => {
    try {
      const items = await FamilyhistoryModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a familyhistory by ID
  export const getFamilyhistoryById = async (req: Request, res: Response) => {
    try {
      const item = await FamilyhistoryModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Familyhistory not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new familyhistory
  export const createFamilyhistory = async (req: Request, res: Response) => {
    const newItem = new FamilyhistoryModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a familyhistory by ID
  export const updateFamilyhistory = async (req: Request, res: Response) => {
    try {
      const updatedItem = await FamilyhistoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Familyhistory not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a familyhistory by ID
  export const deleteFamilyhistory = async (req: Request, res: Response) => {
    try {
      const deletedItem = await FamilyhistoryModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Familyhistory not found' });
      res.status(200).json({ message: 'Familyhistory deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };