import { connect } from 'mongoose';

const dbURI = process.env.DATABASE_URL;
console.log(process.env);

const connectToDatabase = async () => {
  try {
    await connect(dbURI!);
  } catch (error) {
    throw error;
  }
};

export { connectToDatabase };
