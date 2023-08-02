import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET
    })
  ],
  exports: [JwtModule]
})
export default class CoreModule {}