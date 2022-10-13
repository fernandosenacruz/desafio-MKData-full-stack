import { z } from 'zod';

export const ClientCreateSchema = z
  .object({
    name: z.string().min(3).max(50),
    type: z.string().min(3).max(4),
    taxpaperRegistration: z.string().min(11).max(18),
    registration: z.string().min(7).max(16),
    group: z.string().min(3),
    activate: z.boolean(),
  })
  .strict();

const create = ClientCreateSchema;

export const ClienteIdSchema = z
  .object({
    id: z.string().min(1),
  })
  .strict();

const getOne = ClienteIdSchema;

export const ClienteUpdateSchema = z
  .object({
    name: z.string().min(3).max(50),
    type: z.string().min(3).max(4),
    group: z.string().min(3),
    activate: z.boolean(),
  })
  .strict();

const updateOne = ClienteUpdateSchema;

export default {
  create,
  getOne,
  updateOne,
};
