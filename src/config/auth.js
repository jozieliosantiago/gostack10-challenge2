import dotenv from 'dotenv';

dotenv.config();

export default {
  secret: process.env.SECRET,
  expiresIn: process.env.EXPIRED_IN,
};
