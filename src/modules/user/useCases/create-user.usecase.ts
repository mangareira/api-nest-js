import { Injectable, Logger } from '@nestjs/common'
import { IUserRepository } from '../repository/user.repository'
import { CreateUserDTO } from '../dto/user.dto'
import { hash } from 'bcrypt'

@Injectable()
export class CreateUserUseCase {
  private readonly logger = new Logger(CreateUserUseCase.name)
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    const user = await this.userRepository.findByEmailAndName({
      email: data.email,
      name: data.name,
    })

    if (user) {
      this.logger.error(`User ${data.name} already exists ...`, data)
      throw new Error('User already exists!')
    }

    const password = await hash(data.password, 10)

    return await this.userRepository.save({
      ...data,
      password,
    })
  }
}
