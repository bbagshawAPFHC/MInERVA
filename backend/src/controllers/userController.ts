import { Request, Response } from 'express';
import { Client } from '@microsoft/microsoft-graph-client';
import { OnBehalfOfCredential } from '@azure/identity';
import { azureAdConfig } from '../config/authConfig';

const getAuthenticatedClient = (token: string) => {
const credential = new OnBehalfOfCredential({
  tenantId: azureAdConfig.tenantId!,
  clientId: azureAdConfig.clientId!,
  clientSecret: azureAdConfig.clientSecret!,
  userAssertionToken: token,
});

  const client = Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => {
        const accessToken = await credential.getToken(['User.Read']);
        return accessToken.token;
      },
    },
  });

  return client;
};

export const getUserProfilePicture = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
    const token = req.headers.authorization.split(' ')[1];
    const client = getAuthenticatedClient(token);
    const profilePicture = await client.api('/me/photo/$value').get();
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(profilePicture);
  } catch (error) {
    res.status(500).send('Error fetching profile picture');
  }
};
