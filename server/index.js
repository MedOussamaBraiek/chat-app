import express from "express";
import mongoose from 'mongoose';
import ChatRoute from './Routes/ChatRoute.js';

const uri = "mongodb+srv://oussemabraiek:oussama%401998@cluster0.ulppkee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



const app = express();


// usage of routes
app.use('/chat', ChatRoute);

const connect = async () => {
  try{
      await mongoose.connect(uri);
      console.log("Connected to mongoDB.")
  } catch (error) {
      throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(express.json());

app.listen(8800, () => {
  connect();
  console.log("Connect to server...");
});