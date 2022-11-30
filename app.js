import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://arv12345:arv12345@cluster0.k2c3qd9.mongodb.net/?retryWrites=true&w=majority');
const app = express(); //creates an instance of the library
app.use(cors())
app.use(express.json())
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);
