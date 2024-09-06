import jwt from '@elysiajs/jwt';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const jwtMiddleware = jwt({
  secret,
  algorithm: 'HS256',
  expiresIn: '1h',
});
