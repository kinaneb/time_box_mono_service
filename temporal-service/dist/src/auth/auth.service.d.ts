import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        firstname: string | null;
        lastname: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    signin(dto: AuthDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        uuid: string;
        firstname: string | null;
        lastname: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
