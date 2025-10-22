import { z } from "zod";

export const signupSchema = z.object({
    email: z.email(),
    username: z.string().min(3).max(10),
    password: z.string().min(3)
}); 

export const signinSchema = z.object({
    email: z.email(),
    password: z.string().min(3)
});

export const paymentSchema = z.object({
  amount: z
    .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
    })
    .gte(1, "Amount must be at least 1.") // Minimum amount
    .lte(100000, "Amount must be less than or equal to 1,00,000.") // Maximum amount
});

export const newsletterSchema = z.object({
    email: z.email(),
    name: z.string().min(2).optional()
})