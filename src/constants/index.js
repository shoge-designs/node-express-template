import dotenv from 'dotenv';
dotenv.config();

export const isDev = process.env.NODE_ENV === 'development';

export const port = process.env.PORT || 5000;

export const DB_URL = process.env.DB_URL;

export const SECRET_OR_KEY = process.env.SECRET_OR_KEY;
