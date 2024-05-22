import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/", productControllers.createProduct);
router.get("/", productControllers.getAllProducts);
router.get("/:productID", productControllers.getSingleProduct);

export const ProductRouters = router;
