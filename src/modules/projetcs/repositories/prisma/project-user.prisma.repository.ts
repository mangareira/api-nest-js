import { Injectable } from '@nestjs/common'
import { IProjectUserRepository } from '../project-user.repository'
import {
  ProjectUserRequestDTO,
  ProjectUserResponseDTO,
} from '../../dto/project-user.dto'
import { PrismaService } from 'src/infra/database/prisma.service'

@Injectable()
export class ProjectUserPrismaRepository implements IProjectUserRepository {
  constructor(private prisma: PrismaService) {}
  save(data: ProjectUserRequestDTO): Promise<ProjectUserResponseDTO> {
    return this.prisma.projectUser.create({
      data: {
        project: {
          create: {
            tema: data.tema,
            resumo: data.resumo,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    })
  }
}
