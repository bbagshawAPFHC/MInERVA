export interface PatientDetails {
  athenapatientid: string;
  firstname: string;
  lastname: string;
  // add other fields as necessary
}

export interface Patient {
  _id: string;
  patientdetails: PatientDetails;
}
