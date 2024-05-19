import cors from 'cors';
import express from 'express';
import { router } from './routes';
import { connectToDatabase } from './config/database';

class App {
  private app = express();
  private port = process.env.PORT ?? 3001;

  constructor() {
    this.configureMiddleware();
    this.connectToDatabase().then(() => {
      this.startServer();
    });
  }

  private configureMiddleware() {
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
