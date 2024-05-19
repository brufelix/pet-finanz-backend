import { connect } from 'mongoose';
import envs from '../constants/envs';

const connectToDatabase = async () => {
  try {
    await connect(envs.database_url);
  } catch (error) {
    throw error;
  }
};

export { connectToDatabase };
