import {z} from 'zod';

export const loginScheme = z.object({
  email: z.string().email('email inválido'),
  password: z.string().min(1, 'senha obrigatória'),
});

export type LoginSchema = z.infer<typeof loginScheme>;
