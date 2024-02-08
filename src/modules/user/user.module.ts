import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { PrismaService } from 'src/infra/database/prisma.service'
import { IUserRepository } from './repository/user.repository'
import { CreateUserUseCase } from './useCases/create-user.usecase'
import { UserPrismaRepository } from './repository/prisma/user.prisma.repository'
import { GetAllUserUseCase } from './useCases/getAll-user.usecase'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    GetAllUserUseCase,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
