import {
  Controller,
  Get,
  Request,
  Body,
  Post,
  Headers,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtPayload } from './jwt-payload.type';
import { Requestor } from "../decorators/requestor.decorator";
import { AuthGuard } from '../guards/auth.guard';

@ApiTags('Auth routes')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @ApiBearerAuth('default')
  @UseGuards(AuthGuard)
  async me(@Headers() headers: string, @Requestor() requestor: JwtPayload) {
    return await this.authService.me(requestor);
  }

  @HttpCode(200)
  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return await this.authService.register(authDto);
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return await this.authService.login(authDto);
  }
}
