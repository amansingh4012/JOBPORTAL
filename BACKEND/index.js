import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
 dotenv.config({});
import connectToDB from "./utils/db.js";

const app = express();

connectToDB();

const PORT = process.env.PORT || 3000;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const corsOption = {
    origin : 'http//localhost:5173',
    Credentials : true
}

app.use(cors(corsOption));

app.listen(PORT, ()=> {
    console.log(`SERVER is runing at http://localhost:${PORT}`)
})