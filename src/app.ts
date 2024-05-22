import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.route";
import { OrderRouter } from "./app/modules/order/order.route";

const app = express();

// parser
app.use(express.json());
app.use(cors());

// routers
app.use("/api/products", ProductRouters);
app.use("/api/orders", OrderRouter);

const getAController = (req: Request, res: Response) => {
  res.send("Hello world");
};

app.get("/", getAController);

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


export default app;
