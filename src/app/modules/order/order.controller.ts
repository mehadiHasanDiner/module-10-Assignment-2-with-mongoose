import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const orderData = orderValidationSchema.parse(data);
    const result = await OrderService.createOrderIntoDB(orderData);
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrderService.getAllOrdersFromDB(email);
    if (email) {
      if (!result) {
        return res.status(500).json({
          success: false,
          message: "Order not found",
        });
      } else {
        if (result.length === 0) {
          return res.json({
            success: false,
            message: `No orders found for this email: ${email}`,
            data: result,
          });
        }
        return res.json({
          success: true,
          message: `Orders fetched successfully for user email: ${email}`,
          data: result,
        });
      }
    }

    res.json({
      success: true,
      message: "Orders fetched successfully!",
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

export const orderControllers = {
  createOrder,
  getAllOrders,
};
