import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";
import { ProductModel } from "../product/product.model";

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<IOrder>("Order", orderSchema);
