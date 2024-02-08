import { Injectable, Logger } from '@nestjs/common'
import { IProjectUserRepository } from '../repositories/project-user.repository'
import { ProjectUserRequestDTO } from '../dto/project-user.dto'

@Injectable()
export class CreateProjectUserUseCase {
  private readonly logger = new Logger(CreateProjectUserUseCase.name)
  constructor(private projectUserRepository: IProjectUserRepository) {}
  async execute(data: ProjectUserRequestDTO) {
    this.logger.log('... criando projeto ...')
    return await this.projectUserRepository.save(data)
  }
}
