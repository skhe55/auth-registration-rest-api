import { IsString, IsEmail, IsNotEmpty, Length } from "class-validator";
import { IsValidPassword } from "src/decorators/IsValidPassword";
export class CreateUserDto {
    @IsString({ message: 'the email field must be a string' })                  // i use decorators IsEmail and IsNotEmpty 
    @IsEmail({}, { message: 'Incorrect email' })                                // because these decorators basically represent
    readonly email: string;                                                     // the validation rules for particular fields

    @IsString({ message: 'the password field must be a string' })               // email filed should contain a valid email id
    @Length(8, 16, { message: 'at least 8 characters + numbers' })              // and the password field should not be empty
    @IsNotEmpty()
    @IsValidPassword({ message: 'password must be numbers and symbols' })
    readonly password: string;
}