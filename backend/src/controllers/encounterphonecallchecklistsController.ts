import { Request, Response } from 'express';
  import EncounterphonecallchecklistsModel from '../models/EncounterphonecallchecklistsModel';
  
  // Get all encounterphonecallchecklistss
  export const getAllEncounterphonecallchecklists = async (req: Request, res: Response) => {
    try {
      const items = await EncounterphonecallchecklistsModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a encounterphonecallchecklists by ID
  export const getEncounterphonecallchecklistsById = async (req: Request, res: Response) => {
    try {
      const item = await EncounterphonecallchecklistsModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Encounterphonecallchecklists not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new encounterphonecallchecklists
  export const createEncounterphonecallchecklists = async (req: Request, res: Response) => {
    const newItem = new EncounterphonecallchecklistsModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a encounterphonecallchecklists by ID
  export const updateEncounterphonecallchecklists = async (req: Request, res: Response) => {
    try {
      const updatedItem = await EncounterphonecallchecklistsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Encounterphonecallchecklists not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a encounterphonecallchecklists by ID
  export const deleteEncounterphonecallchecklists = async (req: Request, res: Response) => {
    try {
      const deletedItem = await EncounterphonecallchecklistsModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Encounterphonecallchecklists not found' });
      res.status(200).json({ message: 'Encounterphonecallchecklists deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };