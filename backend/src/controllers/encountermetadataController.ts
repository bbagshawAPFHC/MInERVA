import { Request, Response } from 'express';
  import EncountermetadataModel from '../models/EncountermetadataModel';
  
  // Get all encountermetadatas
  export const getAllEncountermetadata = async (req: Request, res: Response) => {
    try {
      const items = await EncountermetadataModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a encountermetadata by ID
  export const getEncountermetadataById = async (req: Request, res: Response) => {
    try {
      const item = await EncountermetadataModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Encountermetadata not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new encountermetadata
  export const createEncountermetadata = async (req: Request, res: Response) => {
    const newItem = new EncountermetadataModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a encountermetadata by ID
  export const updateEncountermetadata = async (req: Request, res: Response) => {
    try {
      const updatedItem = await EncountermetadataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Encountermetadata not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a encountermetadata by ID
  export const deleteEncountermetadata = async (req: Request, res: Response) => {
    try {
      const deletedItem = await EncountermetadataModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Encountermetadata not found' });
      res.status(200).json({ message: 'Encountermetadata deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };