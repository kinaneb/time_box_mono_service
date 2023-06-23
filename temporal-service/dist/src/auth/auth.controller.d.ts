import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
