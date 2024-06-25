import { Request, Response } from 'express';
import Patient from '../models/patientModel'; // Correct import

export const searchPatients = async (req: Request, res: Response) => {
  const query = req.query.query as string;
  try {
    const patients = await Patient.find({
      $or: [
        { "patients.name.given": { $regex: query, $options: 'i' } },
        { "patients.name.family": { $regex: query, $options: 'i' } }
      ]
    }).exec();

    if (patients) {
      const results = patients.map((patient: any) => {
        console.log('Patient:', JSON.stringify(patient, null, 2)); // Log each patient in detail
        if (!patient.patients || !patient.patients[0] || !patient.patients[0].name) {
          console.error('Missing name data in patient:', patient);
          return null;
        }
        return {
          _id: patient._id,
          firstName: patient.patients[0].name.given[0],
          lastName: patient.patients[0].name.family,
          athenapatientid: patient.athenapatientid
        };
      }).filter(patient => patient !== null);

      console.log('Response:', JSON.stringify(results, null, 2)); // Log the final response
      res.json(results);
    } else {
      res.status(404).json({ message: 'No patients found' });
    }
  } catch (error) {
    console.error('Error in searchPatients:', error);
    res.status(500).json({ message: 'Error fetching patients' });
  }
};
