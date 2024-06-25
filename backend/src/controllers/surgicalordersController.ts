import { Request, Response } from 'express';
  import SurgicalordersModel from '../models/SurgicalordersModel';
  
  // Get all surgicalorderss
  export const getAllSurgicalorders = async (req: Request, res: Response) => {
    try {
      const items = await SurgicalordersModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a surgicalorders by ID
  export const getSurgicalordersById = async (req: Request, res: Response) => {
    try {
      const item = await SurgicalordersModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Surgicalorders not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new surgicalorders
  export const createSurgicalorders = async (req: Request, res: Response) => {
    const newItem = new SurgicalordersModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a surgicalorders by ID
  export const updateSurgicalorders = async (req: Request, res: Response) => {
    try {
      const updatedItem = await SurgicalordersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Surgicalorders not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a surgicalorders by ID
  export const deleteSurgicalorders = async (req: Request, res: Response) => {
    try {
      const deletedItem = await SurgicalordersModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Surgicalorders not found' });
      res.status(200).json({ message: 'Surgicalorders deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };