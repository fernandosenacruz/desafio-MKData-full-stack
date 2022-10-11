import { z } from 'zod';

export const ClientCreateSchema = z
  .object({
    name: z.string().min(3).max(50),
    type: z.string().min(3).max(4),
    taxpaperRegistration: z.string().min(11).max(14),
    registration: z.string().min(7),
    group: z.string().min(3),
    activate: z.boolean(),
  })
  .strict();

const create = ClientCreateSchema;

export default {
  create,
};
