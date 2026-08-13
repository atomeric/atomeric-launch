import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  company: z.string().optional(),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  track: z.string().min(1, 'Please select a service track'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
