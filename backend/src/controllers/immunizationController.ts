import { Request, Response } from 'express';
  import ImmunizationModel from '../models/ImmunizationModel';
  
  // Get all immunizations
  export const getAllImmunization = async (req: Request, res: Response) => {
    try {
      const items = await ImmunizationModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a immunization by ID
  export const getImmunizationById = async (req: Request, res: Response) => {
    try {
      const item = await ImmunizationModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Immunization not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new immunization
  export const createImmunization = async (req: Request, res: Response) => {
    const newItem = new ImmunizationModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a immunization by ID
  export const updateImmunization = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ImmunizationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Immunization not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a immunization by ID
  export const deleteImmunization = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ImmunizationModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Immunization not found' });
      res.status(200).json({ message: 'Immunization deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };