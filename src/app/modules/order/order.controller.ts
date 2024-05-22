import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const orderData = orderValidationSchema.parse(data);
    const result = await OrderService.createOrder(orderData);
    res.json({
      success: true,
      message: "Order has been created successfully!",
      data: result,
    });
  } catch (err: any) {
    if (err.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: err.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const orderControllers = {
  createOrder,
};
