export interface Patient {
  _id: string;
  name: {
    given: string;
    family: string;
  };
  athenapatientid: string;
}
