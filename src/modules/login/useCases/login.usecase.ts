import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IUserRepository } from 'src/modules/user/repository/user.repository'
import { SignInDTO } from '../dto/login.dto'
import { compare } from 'bcrypt'

@Injectable()
export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(data: SignInDTO) {
    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      throw new UnauthorizedException()
    }
    const IsEqualPassword = await compare(data.password, user.password)
    if (!IsEqualPassword) {
      throw new UnauthorizedException()
    }

    const payload = {
      sub: user.id,
      email: user.email,
    }

    const token = await this.jwtService.signAsync(payload)

    return {
      access_token: token,
    }
  }
}
