import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    // At this point, "dto" has already been validated
    // You can now proceed with processing and saving the user data
    return 'User created successfully';
  }
}