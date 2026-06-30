import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.enum(['under-10k', '10k-50k', '50k-100k', '100k+'], {
    errorMap: () => ({ message: 'Please select a budget range' }),
  }),
  message: z.string().min(20, 'Please describe your project in at least 20 characters'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Enter a valid email'),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Please tell us a bit more'),
});

export type DemoFormValues = z.infer<typeof demoSchema>;
