import {
  IsString,
  IsEmail,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class signupDTO {
  @IsString()
  @IsEmail({})
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, {
    message:
      'Password too weak. It must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number:',
  })
  password: string;

  @IsString()
  @IsOptional()
  name: string;
}

export class loginDTO {}
