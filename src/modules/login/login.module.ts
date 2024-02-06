import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { LoginController } from './login.controller'
import { PrismaService } from 'src/infra/database/prisma.service'
import { LoginUseCase } from './useCases/login.usecase'
import { IUserRepository } from '../user/repository/user.repository'
import { UserPrismaRepository } from '../user/repository/prisma/user.prisma.repository'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    PrismaService,
    LoginUseCase,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
  controllers: [LoginController],
})
export class LoginModule {}
