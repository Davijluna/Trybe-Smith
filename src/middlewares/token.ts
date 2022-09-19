import { sign, SignOptions } from 'jsonwebtoken';
import Payload from '../interface/PayloadInterface';

const JWT_SECRET = 'segredo';

const createToken = (objtNameId: Payload) => {
  const jwtConfig: SignOptions = { algorithm: 'HS256', expiresIn: '7d' };
  const token = sign(objtNameId, JWT_SECRET, jwtConfig);
  return token;
};

export default { createToken };
