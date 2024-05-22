import { z } from "zod";

// Define variant schema
const variantValidationSchema = z.object({
  type: z.string().min(1, "type is required"),
  value: z.string().min(1, "value is required"),
});

// Define inventory schema
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative("quantity cannot be negative")
    .min(1, "quantity is required"),
  inStock: z.boolean(),
});

// Define product schema
export const productSchemaForValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive().min(1, "Price is required"),
  category: z.string().min(1, "category is required"),
  tags: z.string().array(),
  variants: z.array(variantValidationSchema).min(1, "variants is required"),
  inventory: inventoryValidationSchema,
});

export const productValidationSchema = productSchemaForValidation.partial();
