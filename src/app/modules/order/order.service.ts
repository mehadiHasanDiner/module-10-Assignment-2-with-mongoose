import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (orderData: IOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

export const OrderService = {
  createOrder,
};
