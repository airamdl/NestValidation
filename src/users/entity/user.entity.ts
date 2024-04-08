// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @MinLength(8)
  password: string;
}

export default User;