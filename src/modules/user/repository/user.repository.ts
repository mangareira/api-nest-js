import { CreateUserDTO, EmailAndName, UserCreatedDTO } from '../dto/user.dto'

export abstract class IUserRepository {
  abstract findByEmailAndName(
    data: EmailAndName,
  ): Promise<UserCreatedDTO | null>
  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>
  abstract findById(id: string): Promise<UserCreatedDTO | null>
  abstract findAll(): Promise<UserCreatedDTO[]>
  abstract deleteById(id: string): Promise<UserCreatedDTO | null>
}
