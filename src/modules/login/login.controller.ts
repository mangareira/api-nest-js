import { Body, Controller, Post } from '@nestjs/common'
import { LoginUseCase } from './useCases/login.usecase'
import { SignInDTO } from './dto/login.dto'

@Controller('/auth')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post('/user')
  async signIn(@Body() signInDTO: SignInDTO) {
    const token = await this.loginUseCase.execute(signInDTO)
    return token
  }
}
