import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (orderData: IOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

const getAllOrdersFromDB = async (email: unknown) => {
  if (typeof email === "string") {
    const result = await OrderModel.find({ email });
    return result;
  }
  const result = await OrderModel.find();
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
