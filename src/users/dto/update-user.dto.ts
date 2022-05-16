import { Expose } from 'class-transformer';
import { Length, IsEmail, IsDate, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  @Expose()
  email?: string;

  @IsOptional()
  @IsString()
  @Length(8, 64)
  @Expose()
  password?: string;

  @IsOptional()
  @IsString()
  @Expose()
  first_name?: string;

  @IsOptional()
  @IsString()
  @Expose()
  last_name?: string;

  @IsOptional()
  @IsDate()
  @Expose()
  date_of_birth?: Date;
}
