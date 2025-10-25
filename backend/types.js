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

export const consultancyBookingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(7, "Phone number is too short"), // You can adjust the validation
  organization: z.string().min(1, "Organization is required"),
  organizationType: z.string().min(1, "Organization type is required"),
  requirement: z.string().min(1, "Requirement is required"),
  message: z.string().min(1, "Message is required"),
  completed: z.boolean().optional(), // Usually not set by the user, optional in form
  userId: z.string().uuid().optional(), // Optional if user is authenticated
});

export const bookingId = z.object({
  bookingId: z.string().max()
})

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  shortDescription: z.string().min(10, "Short description must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters long"),
});