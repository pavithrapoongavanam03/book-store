import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config.js';
import booksRouter from './routers/booksRouter.js';

const app = express();
const { port, mongodbUrl } = config;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the MERN stack!');
});

// Books routes
app.use('/books', booksRouter);

// Connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Start server after connecting to MongoDB
const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
};

// Initialize application
const init = async () => {
    await connectToMongoDB();
    startServer();
};

// Start the application
init();
