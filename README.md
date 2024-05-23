# module-10-Assignment-2-with-mongoose - API for Backend Application

## Short Description:

This application constitutes a backend system developed using Node.js, Express, and TypeScript. It employs Mongoose to facilitate interactions with MongoDB, CORS for enabling cross-origin resource sharing, and Zod for schema validation. Within this README document, you will find comprehensive instructions detailing the setup and local execution of this application.

## Requirements that need for this application

Before starting, please ensure that you fulfill the following prerequisites:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (can be either a local installation or a remote instance)

## For Installation

1. **For Cloning the repository:**

   ```bash
   git clone <repository-url>
   cd module-10-Assignment-2-with-mongoose
   ```

2. **For Installing dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file at the root directory of your project,**
   the file should have the required environment variables. For instance:

   ```env
   DB_URL=mongodb://localhost:27017/database
   PORT=5000
   ```

### For Running on Development Mode

To execute the application in development mode, run the following command:

```bash
npm run start:dev
```
