import { Request, Response } from 'express';
  import EncounterdocumentModel from '../models/EncounterdocumentModel';
  
  // Get all encounterdocuments
  export const getAllEncounterdocument = async (req: Request, res: Response) => {
    try {
      const items = await EncounterdocumentModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a encounterdocument by ID
  export const getEncounterdocumentById = async (req: Request, res: Response) => {
    try {
      const item = await EncounterdocumentModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Encounterdocument not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new encounterdocument
  export const createEncounterdocument = async (req: Request, res: Response) => {
    const newItem = new EncounterdocumentModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a encounterdocument by ID
  export const updateEncounterdocument = async (req: Request, res: Response) => {
    try {
      const updatedItem = await EncounterdocumentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Encounterdocument not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a encounterdocument by ID
  export const deleteEncounterdocument = async (req: Request, res: Response) => {
    try {
      const deletedItem = await EncounterdocumentModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Encounterdocument not found' });
      res.status(200).json({ message: 'Encounterdocument deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };