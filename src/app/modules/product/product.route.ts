import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/", productControllers.createProduct);
router.get("/", productControllers.getAllProducts);
router.get("/:productID", productControllers.getSingleProduct);
router.put("/:productID", productControllers.updateProductById);
router.delete("/:productID", productControllers.deleteProduct);

export const ProductRouters = router;
