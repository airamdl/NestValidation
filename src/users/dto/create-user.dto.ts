import { IsNotEmpty, IsEmail, minLength, isString, isEmail } from "class-validator";

export class CreateUserDto{
    @isString()
    readonly username: string

    @isEmail()
    readonly email: string

    @isString()
    @minLength(6)
  readonly password: string;
}