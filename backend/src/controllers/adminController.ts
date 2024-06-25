import { Request, Response } from 'express';
  import AdminModel from '../models/AdminModel';
  
  // Get all admins
  export const getAllAdmin = async (req: Request, res: Response) => {
    try {
      const items = await AdminModel.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a admin by ID
  export const getAdminById = async (req: Request, res: Response) => {
    try {
      const item = await AdminModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Admin not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new admin
  export const createAdmin = async (req: Request, res: Response) => {
    const newItem = new AdminModel(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a admin by ID
  export const updateAdmin = async (req: Request, res: Response) => {
    try {
      const updatedItem = await AdminModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Admin not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a admin by ID
  export const deleteAdmin = async (req: Request, res: Response) => {
    try {
      const deletedItem = await AdminModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Admin not found' });
      res.status(200).json({ message: 'Admin deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };