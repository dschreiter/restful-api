import express from "express";
import dbConnect from "./db/dbConnect.js";

const app = express();

dbConnect();

export default app;
