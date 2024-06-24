// backend/config/authConfig.ts
export const azureAdConfig = {
    clientId: process.env.AZURE_AD_CLIENT_ID,
    tenantId: process.env.AZURE_AD_TENANT_ID,
    clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
    redirectUri: process.env.AZURE_AD_REDIRECT_URI,
  };
  