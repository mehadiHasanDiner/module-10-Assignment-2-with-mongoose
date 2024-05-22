import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.route";

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRouters);

const getAController = (req: Request, res: Response) => {
  res.send("Hello world");
};

app.get("/", getAController);

export default app;
