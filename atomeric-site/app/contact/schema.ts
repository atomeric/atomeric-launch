import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Full name is required').max(100).trim(),
  company: z.string().max(100).trim().optional(),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address').max(254).trim(),
  track: z.string().min(1, 'Please select a service track').max(100).trim(),
  budget: z.string().min(1, 'Please select a budget range').max(100).trim(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be under 2000 characters').trim(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
