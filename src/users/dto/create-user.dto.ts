import { Expose } from 'class-transformer';
import {
  Length,
  IsEmail,
  IsDate,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email?: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 64)
  @Expose()
  password?: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  first_name?: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  last_name?: string;

  @IsOptional()
  @IsDate()
  @Expose()
  date_of_birth?: Date;
}
