import { Request, Response } from 'express';
  import LabresultsModel from '../models/LabresultsModel';
  
  // Get all labresultss
  export const getAllLabresults = async (req: Request, res: Response) => {
    try {
      const items = await LabresultsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a labresults by ID
  export const getLabresultsById = async (req: Request, res: Response) => {
    try {
      const item = await LabresultsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Labresults not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new labresults
  export const createLabresults = async (req: Request, res: Response) => {
    const newItem = new LabresultsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a labresults by ID
  export const updateLabresults = async (req: Request, res: Response) => {
    try {
      const updatedItem = await LabresultsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Labresults not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a labresults by ID
  export const deleteLabresults = async (req: Request, res: Response) => {
    try {
      const deletedItem = await LabresultsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Labresults not found' });
      res.status(200).json({ message: 'Labresults deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };