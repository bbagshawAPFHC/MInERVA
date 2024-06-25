import { Request, Response } from 'express';
  import DemographicModel from '../models/DemographicModel';
  
  // Get all demographics
  export const getAllDemographic = async (req: Request, res: Response) => {
    try {
      const items = await DemographicModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a demographic by ID
  export const getDemographicById = async (req: Request, res: Response) => {
    try {
      const item = await DemographicModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Demographic not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new demographic
  export const createDemographic = async (req: Request, res: Response) => {
    const newItem = new DemographicModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a demographic by ID
  export const updateDemographic = async (req: Request, res: Response) => {
    try {
      const updatedItem = await DemographicModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Demographic not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a demographic by ID
  export const deleteDemographic = async (req: Request, res: Response) => {
    try {
      const deletedItem = await DemographicModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Demographic not found' });
      res.status(200).json({ message: 'Demographic deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };