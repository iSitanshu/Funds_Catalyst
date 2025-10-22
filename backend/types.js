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

const sanitizeHtml = (value) => {
  if (/<script.*?>.*?<\/script>/gi.test(value)) {
    throw new Error('Script tags are not allowed')
  }
  return value
}

export const emailContentSchema = z.object({
  subject: z
    .string()
    .trim()
    .min(1, { message: 'Subject is required' })
    .max(200, { message: 'Subject must be under 200 characters' }),
  
  content: z
    .string()
    .trim()
    .min(1, { message: 'Content is required' })
    .max(5000, { message: 'Content must be under 5000 characters' })
    .transform(sanitizeHtml)
})