// src/types/express/index.d.ts
import { AccountInfo } from '@azure/msal-common';

interface CustomAccountInfo extends AccountInfo {
  roles?: string[];
}

declare global {
  namespace Express {
    export interface Request {
        user: any;
    }
    export interface Response {
        user: any;
    }
  }
}