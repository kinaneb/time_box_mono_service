import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): Promise<User>;
    signin(dto: AuthDto): Promise<User>;
}
