import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const CreateUserSchema = z.object({
  name: z.string(),
  password: z.string(),
  periodo: z.string(),
  turma: z.string(),
  email: z.string().email(),
})

export class CreateUserSchemaDTO extends createZodDto(CreateUserSchema) {}

export const CreateUserResponseSchemaDTO = CreateUserSchema.omit({
  password: true,
})

export interface CreateUserResponseSchemaDTO
  extends z.infer<typeof CreateUserResponseSchemaDTO> {}
