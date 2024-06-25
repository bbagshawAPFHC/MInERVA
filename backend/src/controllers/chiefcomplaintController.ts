import { Request, Response } from 'express';
  import ChiefcomplaintModel from '../models/ChiefcomplaintModel';
  
  // Get all chiefcomplaints
  export const getAllChiefcomplaint = async (req: Request, res: Response) => {
    try {
      const items = await ChiefcomplaintModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a chiefcomplaint by ID
  export const getChiefcomplaintById = async (req: Request, res: Response) => {
    try {
      const item = await ChiefcomplaintModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Chiefcomplaint not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new chiefcomplaint
  export const createChiefcomplaint = async (req: Request, res: Response) => {
    const newItem = new ChiefcomplaintModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a chiefcomplaint by ID
  export const updateChiefcomplaint = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ChiefcomplaintModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Chiefcomplaint not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a chiefcomplaint by ID
  export const deleteChiefcomplaint = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ChiefcomplaintModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Chiefcomplaint not found' });
      res.status(200).json({ message: 'Chiefcomplaint deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };