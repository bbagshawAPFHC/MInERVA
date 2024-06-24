// backend/src/types/express/index.d.ts
import { AccountInfo } from '@azure/msal-common';

interface CustomAccountInfo extends AccountInfo {
  roles?: string[];
}

declare global {
  namespace Express {
    interface Request {
      user?: CustomAccountInfo;
    }
  }
}
