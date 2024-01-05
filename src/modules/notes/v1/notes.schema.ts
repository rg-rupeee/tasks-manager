import { IsString } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class getNoteDTO {
  @IsObjectId()
  id: string;
}

export class createNoteDTO {
  @IsString()
  text: string;
}

export class updateNoteDTO {
  @IsObjectId()
  id: string;
}

export class updateNoteBodyDTO {
  @IsString()
  text: string;
}

export class deleteNoteDTO {
  @IsObjectId()
  id: string;
}

export class shareNoteDTO {
  @IsObjectId()
  id: string;
}

export class shareNoteBodyDTO {
  @IsObjectId()
  user_id: string;
}
