import { Injectable } from '@nestjs/common'
import { IUserRepository } from '../repository/user.repository'
import { CreateUserResponseSchemaDTO } from '../schemas/create-user.schema'

@Injectable()
export class GetAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<CreateUserResponseSchemaDTO[]> {
    const users = this.userRepository.findAll()

    return (await users).map((user) => CreateUserResponseSchemaDTO.parse(user))
  }
}
