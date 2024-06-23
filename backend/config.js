import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const config = {
    port: process.env.PORT || 5555,
    mongodbUrl: process.env.MONGODB_URL,
};

export default config;
