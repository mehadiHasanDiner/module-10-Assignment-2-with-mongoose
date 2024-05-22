import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Product data retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const result = await ProductService.getSingleProductFromDB(productID);
    res.status(200).json({
      success: true,
      message: "Single Product data retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
