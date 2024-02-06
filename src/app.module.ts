import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { ZodValidationPipe } from 'nestjs-zod'
import { APP_PIPE } from '@nestjs/core'
import { LoginModule } from './modules/login/login.module'

@Module({
  imports: [UserModule, LoginModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
