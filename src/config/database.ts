import { connect } from 'mongoose';

const dbURI = process.env.DATABASE_URL;

const connectToDatabase = async () => {
  try {
    await connect(dbURI!);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export { connectToDatabase };
