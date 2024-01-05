import mongoose from 'mongoose';

export interface INote {
  user_id: mongoose.Schema.Types.ObjectId;
  text: string;
  shared_with: [mongoose.Schema.Types.ObjectId];
}

export default INote;
