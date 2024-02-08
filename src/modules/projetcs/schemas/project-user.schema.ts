import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const CreateProjectUserSchema = z.object({
  tema: z.string(),
  resumo: z.string(),
})

export class CreateProjectUserSchemaDTO extends createZodDto(
  CreateProjectUserSchema,
) {}
