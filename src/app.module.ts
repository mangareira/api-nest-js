import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { ZodValidationPipe } from 'nestjs-zod'
import { APP_PIPE } from '@nestjs/core'
import { LoginModule } from './modules/login/login.module'
import { ProjectUserModule } from './modules/projetcs/project-user.module'

@Module({
  imports: [UserModule, LoginModule, ProjectUserModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
