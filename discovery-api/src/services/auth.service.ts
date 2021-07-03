import { PrismaService } from './../prisma/prisma.service';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { SignupInput } from '../resolvers/auth/dto/signup.input';
import { Prisma, User } from '@prisma/client';
import { AuthToken } from '../models/token.model';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/configs/config.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) {}

  async createUser(payload: SignupInput): Promise<AuthToken> {
    try {
      const user = await this.prisma.user.create({
        data: {
          ethAddresses: payload.ethAddresses,
          role: 'USER',
        },
      });

      return this.generateTokens({
        userId: user.id,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`Accounts ${payload.ethAddresses} already used.`);
      } else {
        throw new Error(e);
      }
    }
  }

  async login(ethAddresses): Promise<AuthToken> {
    let user = await this.prisma.user.findUnique({ where: { ethAddresses } });

    if (!user) {
      const createdUser = await this.createUser(ethAddresses);
      user = await this.getUserFromToken(createdUser.accessToken)
    }
    return this.generateTokens({
      userId: user.id,
    });
  }

  validateUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateTokens(payload: { userId: string }): AuthToken {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload)
    };
  }

  private generateAccessToken(payload: { userId: string }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(
      payload,
      {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
      },
    );
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      return this.generateTokens({
        userId,
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
