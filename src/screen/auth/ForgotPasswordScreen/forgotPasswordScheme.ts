import {z} from 'zod';

export const forgotPasswordScheme = z.object({
  email: z.string().email('email inválido'),
});

export type ForgotPasswordScheme = z.infer<typeof forgotPasswordScheme>;
