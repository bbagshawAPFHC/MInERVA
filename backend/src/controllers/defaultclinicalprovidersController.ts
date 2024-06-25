import { Request, Response } from 'express';
  import DefaultclinicalprovidersModel from '../models/DefaultclinicalprovidersModel';
  
  // Get all defaultclinicalproviderss
  export const getAllDefaultclinicalproviders = async (req: Request, res: Response) => {
    try {
      const items = await DefaultclinicalprovidersModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a defaultclinicalproviders by ID
  export const getDefaultclinicalprovidersById = async (req: Request, res: Response) => {
    try {
      const item = await DefaultclinicalprovidersModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Defaultclinicalproviders not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new defaultclinicalproviders
  export const createDefaultclinicalproviders = async (req: Request, res: Response) => {
    const newItem = new DefaultclinicalprovidersModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a defaultclinicalproviders by ID
  export const updateDefaultclinicalproviders = async (req: Request, res: Response) => {
    try {
      const updatedItem = await DefaultclinicalprovidersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Defaultclinicalproviders not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a defaultclinicalproviders by ID
  export const deleteDefaultclinicalproviders = async (req: Request, res: Response) => {
    try {
      const deletedItem = await DefaultclinicalprovidersModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Defaultclinicalproviders not found' });
      res.status(200).json({ message: 'Defaultclinicalproviders deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };