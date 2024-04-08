import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async updateUser(id: number, updateUserDto: Partial<CreateUserDto>): Promise<User> {
    const userToUpdate = await this.userRepository.findOne(id);
    this.userRepository.merge(userToUpdate, updateUserDto);
    return await this.userRepository.save(userToUpdate);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
