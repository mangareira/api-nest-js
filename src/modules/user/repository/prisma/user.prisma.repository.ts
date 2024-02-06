import { Injectable } from '@nestjs/common'
import { IUserRepository } from '../user.repository'
import { UserCreatedDTO, CreateUserDTO, EmailAndName } from '../../dto/user.dto'
import { PrismaService } from 'src/infra/database/prisma.service'

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmailAndName(data: EmailAndName): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ name: data.name }, { email: data.email }],
      },
    })
  }
  async findByEmail(email: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    })
  }
  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    return await this.prisma.user.create({
      data,
    })
  }
  async findById(id: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
  async findAll(): Promise<UserCreatedDTO[]> {
    return await this.prisma.user.findMany()
  }
  async deleteById(id: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    })
  }
}
