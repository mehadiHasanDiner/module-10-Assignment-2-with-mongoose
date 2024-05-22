import { z } from "zod";

// Define the Zod schema for an order
const orderValidationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  productId: z.string().min(1, "Email is required"),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export default orderValidationSchema;
