// backend/src/middleware/azureAdMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { expressjwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const azureAdMiddleware = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/discovery/v2.0/keys`,
  }) as any, // Type assertion as 'any' to avoid TypeScript errors
  audience: process.env.AZURE_AD_CLIENT_ID,
  issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0`,
  algorithms: ['RS256'],
});

export const checkRole = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
  const userRoles = req.user?.roles || [];
  const hasRole = roles.some(role => userRoles.includes(role));

  if (!hasRole) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
};
