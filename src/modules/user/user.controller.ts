import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { CreateUserUseCase } from './useCases/create-user.usecase'
import {
  CreateUserResponseSchemaDTO,
  CreateUserSchemaDTO,
} from './schemas/create-user.schema'

@Controller('/user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data: CreateUserSchemaDTO) {
    try {
      const user = await this.createUserUseCase.execute(data)
      return CreateUserResponseSchemaDTO.parse(user)
    } catch {
      throw new HttpException('Erro bad request', HttpStatus.BAD_REQUEST)
    }
  }
}
