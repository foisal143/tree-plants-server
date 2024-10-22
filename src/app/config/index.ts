import dotenv from 'dotenv';
dotenv.config();

export const config = {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
  stripe_key: process.env.STRIPE_SK,
  jwt_sc_key: process.env.JWT_SC_KEY,
};
