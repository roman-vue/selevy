import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    public async created(createUserDto: CreateUserDto) { return}

    public async getAll(){}
}
