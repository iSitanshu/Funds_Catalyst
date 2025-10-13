import { z } from "zod";

export const SignupSchema = z.object({
    email: z.email(),
    username: z.string().min(3).max(10),
    password: z.string().min(3)
})

export const SigninSchema = z.object({
    email: z.email(),
    password: z.string().min(3)
})

export const paymentSchema = z.object({
  amount: z
    .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
    })
    .int("Amount must be a whole number.") // Ensures no decimals
    .gt(1, "Amount must be greater than 1.")   // Must be greater than 1
    .lt(10, "Amount must be less than 10."), // Must be less than 10
});