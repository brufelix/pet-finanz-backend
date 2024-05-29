require('dotenv').config();

export default {
  api_key: process.env.THE_DOG_API_KEY,
  base_url: process.env.THE_DOG_BASE_URL,
  database_url: process.env.DATABASE_URL,
};
