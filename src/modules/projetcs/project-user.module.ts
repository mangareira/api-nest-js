import { Module } from '@nestjs/common'
import { ProjectUserController } from './project-user.controller'
import { PrismaService } from 'src/infra/database/prisma.service'
import { CreateProjectUserUseCase } from './UseCases/project-user.usecase'
import { IProjectUserRepository } from './repositories/project-user.repository'
import { ProjectUserPrismaRepository } from './repositories/prisma/project-user.prisma.repository'

@Module({
  imports: [],
  controllers: [ProjectUserController],
  providers: [
    PrismaService,
    CreateProjectUserUseCase,
    {
      provide: IProjectUserRepository,
      useClass: ProjectUserPrismaRepository,
    },
  ],
})
export class ProjectUserModule {}
