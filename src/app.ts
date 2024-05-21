import express, { Request, Response } from "express";
import { ProductRouters } from "./app/modules/product/product.route";

const app = express();

app.use(express.json());

app.use("/api/products", ProductRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

export default app;
