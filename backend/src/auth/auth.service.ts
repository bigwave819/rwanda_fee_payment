import { PhoneNumber } from './../../node_modules/libphonenumber-js/core/index.d';
import { BadRequestException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    private readonly Salt = 12; 
    constructor(private prisma: PrismaService) {}

    private signToken(user: { id: string; email: string; role: string }) {
        return jwt.sign({
            sub: user.id,
            email: user.email,
            role: user.role
        },
            process.env.JWT_SECRET!,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
    }

    async login(loginDto: LoginDto) {
        try {

            const { phoneNumber, password } = loginDto

            const user = await this.prisma.user.findUnique({
                where: { phoneNumber }
            })

            if (!user) {
                throw new NotFoundException("the user not found")
            }

            const passwordMatch = await bcrypt.compare(password, user.password)

            if (!passwordMatch) {
                throw new BadRequestException("the password and email is incorect")
            }

            const token = this.signToken(user)

            return {
                token,
                user: {
                    id: user.id,
                    phoneNumber: user.PhoneNumber,
                    fullName: user.fullName,
                    role: user.role
                }
            }

        } catch (error) {
            console.error('Error during user registration:', error);
            if (error instanceof HttpException) {
                throw error;
            }
            throw new InternalServerErrorException(
                'An error occurred during registration',
            );
        }
    }
    async create(registerDto: RegisterDto) {
        const { fullName, phoneNumber, password } = registerDto;
        const existingUser = await this.prisma.user.user.findUnique({
            where: { phoneNumber }
        })

        if (existingUser) {
            throw new BadRequestException("the phone numbe in use");
        }

        const newPassword = await bcrypt.hash(password, this.Salt);

        try {
            const hashedPassword = await bcrypt.hash(password, this.Salt)

            const user = await this.prisma.user.create({
                data: {
                    fullName,
                    phoneNumber,
                    password: hashedPassword
                },
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    password: false,
                    role: true
                }
            });

            const token = this.signToken(user);

            return {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    fullName: user.fullName,
                    role: user.role,
                },
            };
        } catch (error) {
            console.error('Error during user registration:', error);
            if (error instanceof HttpException) {
                throw error;
            }
            throw new InternalServerErrorException(
                'An error occurred during registration',
            );
        }
    }
}
