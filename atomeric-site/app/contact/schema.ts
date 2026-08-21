import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Full name is required').max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email address').max(254),
  track: z.string().trim().min(1, 'Please select a service track').max(100),
  budget: z.string().trim().min(1, 'Please select a budget range').max(100),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be under 2000 characters'),
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
  utmTerm: z.string().max(200).optional(),
  utmContent: z.string().max(200).optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
