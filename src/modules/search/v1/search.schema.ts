import { IsString } from 'class-validator';

export class searchDTO {
  @IsString()
  q: string;
}
