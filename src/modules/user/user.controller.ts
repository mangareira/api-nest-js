import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common'
import { CreateUserUseCase } from './useCases/create-user.usecase'
import {
  CreateUserResponseSchemaDTO,
  CreateUserSchemaDTO,
} from './schemas/create-user.schema'
import { AuthGuard } from 'src/infra/provider/auth-guard.provider'
import { GetAllUserUseCase } from './useCases/getAll-user.usecase'

@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private getAllUserUseCase: GetAllUserUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateUserSchemaDTO) {
    try {
      const user = await this.createUserUseCase.execute(data)
      return CreateUserResponseSchemaDTO.parse(user)
    } catch {
      throw new HttpException('Erro bad request', HttpStatus.BAD_REQUEST)
    }
  }
  @Get()
  @UseGuards(AuthGuard)
  async GetAllUserUseCase() {
    return await this.getAllUserUseCase.execute()
  }
}
