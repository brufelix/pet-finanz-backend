require('dotenv').config();

export default {
  api_key: process.env.THE_DOG_API_KEY ?? '',
  base_url: process.env.THE_DOG_BASE_URL ?? 'https://api.thecatapi.com/v1',
  database_url:
    process.env.DATABASE_URL ??
    'mongodb://mongo:BkoNtJZCOYotzMZeWqKPFQORzGEgQaTs@monorail.proxy.rlwy.net:51797',
};
