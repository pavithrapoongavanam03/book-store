import express, { request, response } from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import booksRouter from "./routers/booksRouter.js";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
//{
  //  origin:'http://localhost:3000',
    //methods:['GET','POST','PUT','DELETE'],
    //allowedHeaders:['Content-Type'],
//}));


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to MERN stack');

});
app.use('/books',booksRouter);

mongoose
   .connect(mongoDbURL)
   .then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port:${PORT}`);
    });
   
   })
   .catch((error)=>{
    console.log(error);

   });