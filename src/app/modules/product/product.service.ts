import { ProductModel } from "./product.model";
import { TProduct } from "./product.interface";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData); // creating data by using mongoose model
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
