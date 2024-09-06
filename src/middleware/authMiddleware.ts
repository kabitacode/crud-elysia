import { Elysia } from 'elysia';
import { jwtMiddleware } from '../helper/jwtHelper';

export const authMiddleware = (app: Elysia) => {
  app.use(jwtMiddleware);
};
