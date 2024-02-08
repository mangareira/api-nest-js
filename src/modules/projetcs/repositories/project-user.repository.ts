import {
  ProjectUserRequestDTO,
  ProjectUserResponseDTO,
} from '../dto/project-user.dto'

export abstract class IProjectUserRepository {
  abstract save(data: ProjectUserRequestDTO): Promise<ProjectUserResponseDTO>
}
