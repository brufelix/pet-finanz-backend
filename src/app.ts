import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes';
import { connectToDatabase } from './config/database';

class App {
  private port = 3001;
  private app = express();

  constructor() {
    this.configureMiddleware();
    this.connectToDatabase().then(() => {
      this.startServer();
    });
  }

  private configureMiddleware() {
    dotenv.config();

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
  }

  private async connectToDatabase() {
    try {
      await connectToDatabase();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }

  private startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

new App();
