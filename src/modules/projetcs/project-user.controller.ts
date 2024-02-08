import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'
import { CreateProjectUserUseCase } from './UseCases/project-user.usecase'
import { CreateProjectUserSchemaDTO } from './schemas/project-user.schema'
import { AuthGuard } from 'src/infra/provider/auth-guard.provider'

@Controller('/project')
export class ProjectUserController {
  constructor(private projectUserUseCase: CreateProjectUserUseCase) {}

  @Post('/')
  @UseGuards(AuthGuard)
  async create(@Body() data: CreateProjectUserSchemaDTO, @Request() req) {
    const user = await this.projectUserUseCase.execute({
      ...data,
      userId: req.user.sub,
    })

    return user
  }
}
