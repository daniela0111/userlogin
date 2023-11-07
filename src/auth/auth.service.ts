import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async createToken(payload: any) {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string) {
    //validation
  }
}
