import { msalConfig, loginRequest } from '../authConfig';
import { PublicClientApplication, AuthenticationResult } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);

export const getAccessToken = async (): Promise<string> => {
  try {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
      await msalInstance.loginPopup(loginRequest);
    }
    const account = msalInstance.getActiveAccount() || msalInstance.getAllAccounts()[0];
    const response: AuthenticationResult = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account,
    });
    return response.accessToken;
  } catch (error) {
    console.error('Error acquiring access token:', error);
    throw new Error('Unable to fetch access token');
  }
};
