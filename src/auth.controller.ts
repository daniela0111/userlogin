import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthDto } from '/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body(new ValidationPipe()) authDto: AuthDto) {
    // At this point, `authDto` is validated based on the rules defined in the DTO.
    const { username, password } = authDto;
    // Perform your authentication logic here
  }
}
