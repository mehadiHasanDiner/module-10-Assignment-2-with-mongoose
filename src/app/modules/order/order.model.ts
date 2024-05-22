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

orderSchema.pre("save", async function (next) {
  const result = await ProductModel.findById(this.productId);

  if (!result) {
    throw new Error(`Product does not exist for productId ${this.productId}`);
  }

  // checking if the requested quantity is greater then the product quantity
  const {
    inventory: { quantity },
  }: any = await ProductModel.findById(this.productId);

  if (quantity < this.quantity) {
    throw new Error(
      `Insufficient quantity available for this inventory. Quantity: ${this.quantity}`
    );
  }

  //  reduce the product quantity when ordered
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    this.productId,
    {
      $inc: {
        "inventory.quantity": -this.quantity,
      },
    },
    { new: true }
  );

  //update the inStock if quantity is 0
  if (updatedProduct?.inventory.quantity === 0) {
    await ProductModel.findByIdAndUpdate(this.productId, {
      $set: {
        "inventory.inStock": false,
      },
    });
  }
  next();
});

export const OrderModel = model<IOrder>("Order", orderSchema);
