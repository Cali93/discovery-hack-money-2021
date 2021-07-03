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
import { Prisma, User } from '@prisma/client';
import { AuthToken } from '../models/token.model';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/configs/config.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService
  ) {}

  async createUser(ethAddresses: string[]): Promise<AuthToken> {
    try {
      const user = await this.prisma.user.create({
        data: {
          ethAddresses,
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
        throw new ConflictException(`Accounts ${ethAddresses} already used.`);
      } else {
        throw new Error(e);
      }
    }
  }

  async login(ethAddresses: string[]): Promise<AuthToken> {
    let user = await this.prisma.user.findFirst({ where: { ethAddresses: {
      hasEvery: ethAddresses
    }  } });
    if (!user) {
      return this.createUser(ethAddresses);
    }
    return this.generateTokens({
      userId: user.id,
    });
  }

  async logout(ethAddresses: string[], accessToken: string): Promise<number> {
    let user = await this.prisma.user.findFirst({ where: { ethAddresses: {
      hasEvery: ethAddresses
    }  } });
    const userFromToken = await this.getUserFromToken(accessToken);
    if (!user || !userFromToken) {
      return 500;
    }
    if (user.id === userFromToken.id) {
      return 200;
    }
    return 500;
  }

  async deleteUser(ethAddresses: string[], accessToken: string): Promise<number> {
    let user = await this.prisma.user.findFirst({ where: { ethAddresses: {
      hasEvery: ethAddresses
    }  } });
    const userFromToken = await this.getUserFromToken(accessToken);
    if (!user || !userFromToken) {
      return 500;
    }
    if (user.id === userFromToken.id) {
      const updatedUser = await this.prisma.user.delete({
        where: {
          id: userFromToken.id
        }
      })
      if (updatedUser.id){
        return 200
      }
      return 500
    }
    return 500
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
