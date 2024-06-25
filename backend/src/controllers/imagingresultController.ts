import { Request, Response } from 'express';
  import ImagingresultModel from '../models/ImagingresultModel';
  
  // Get all imagingresults
  export const getAllImagingresult = async (req: Request, res: Response) => {
    try {
      const items = await ImagingresultModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a imagingresult by ID
  export const getImagingresultById = async (req: Request, res: Response) => {
    try {
      const item = await ImagingresultModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Imagingresult not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new imagingresult
  export const createImagingresult = async (req: Request, res: Response) => {
    const newItem = new ImagingresultModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a imagingresult by ID
  export const updateImagingresult = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ImagingresultModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Imagingresult not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a imagingresult by ID
  export const deleteImagingresult = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ImagingresultModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Imagingresult not found' });
      res.status(200).json({ message: 'Imagingresult deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };