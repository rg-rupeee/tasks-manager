import mongoose, { Schema, model } from 'mongoose';

import INote from '@interfaces/note.interface';

export const noteSchema = new Schema<INote>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
    shared_with: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
  },
  { timestamps: true },
);

noteSchema.index({ email: 1 });
noteSchema.index({ text: 'text' });

export const Note = model<INote>('Note', noteSchema);
