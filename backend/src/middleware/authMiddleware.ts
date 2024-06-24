// backend/src/middleware/azureAdMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { ConfidentialClientApplication } from '@azure/msal-node';
import { azureAdConfig } from '../../config/authConfig';
import { CustomAccountInfo } from '../types/express';

const msalConfig = {
  auth: {
    clientId: azureAdConfig.clientId || '',
    authority: `https://login.microsoftonline.com/${azureAdConfig.tenantId}`,
    clientSecret: azureAdConfig.clientSecret || '',
  },
};

const pca = new ConfidentialClientApplication(msalConfig);

export const azureAdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const response = await pca.acquireTokenOnBehalfOf({
      oboAssertion: token,
      scopes: ['User.Read'],
    });
  
    if (response) {
      req.user = response.account as CustomAccountInfo | undefined;
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
