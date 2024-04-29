import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import recipesRouter from "./routes/recipes.js";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/recipes", recipesRouter);


export { app }