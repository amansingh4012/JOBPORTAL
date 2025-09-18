import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
 dotenv.config({});
import connectToDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js"
import jobRoute from "./routes/jobRoute.js";
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

// apis
app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute)
app.use("/api/v1/job", jobRoute)


app.listen(PORT, ()=> {
    console.log(`SERVER is runing at http://localhost:${PORT}`)
})