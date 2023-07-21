import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "../router";
import { AppDataSource } from "./data-source";
import "reflect-metadata";

const app = express();
const port = 7013;

dotenv.config();

AppDataSource.initialize();
AppDataSource.isInitialized
  ? console.log("* DB connection success")
  : console.error("* DB connection failed");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [`${process.env.LOCALHOST}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/", router);

app.listen(port);
