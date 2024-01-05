import AppError from '@core/Error';
import { Note } from '@models/Note/note.schema';

class AuthService {
  public getNotes = async (data: { user: { id: string; email: string } }) => {
    const [notes, sharedNotes] = await Promise.all([
      Note.find({ user_id: data.user.id }),
      Note.find({ shared_with: data.user.id }),
    ]);

    return { notes, sharedNotes };
  };

  public getNote = async (data: {
    id: string;
    user: { id: string; email: string };
  }) => {
    const note = await Note.findOne({ _id: data.id });

    if (!note) {
      throw new AppError('note not found', 404);
    }

    if (note.user_id.toString() !== data.user.id) {
      throw new AppError('Forbidden', 403);
    }

    return { note };
  };

  public createNote = async (data: {
    text: string;
    user: { id: string; email: string };
  }) => {
    const note = await Note.create({ user_id: data.user.id, text: data.text });
    return { note };
  };

  public updateNote = async (data: {
    id: string;
    text: string;
    user: { id: string; email: string };
  }) => {
    const note = await Note.findOne({ _id: data.id });

    if (!note) {
      throw new AppError('note not found', 404);
    }

    if (note.user_id.toString() !== data.user.id) {
      throw new AppError('Forbidden', 403);
    }

    const updatedNote = await Note.findOneAndUpdate(
      { _id: data.id },
      { text: data.text },
      { new: true, runValidators: true },
    );

    return { note: updatedNote };
  };

  public deleteNote = async (data: {
    id: string;
    user: { id: string; email: string };
  }) => {
    const note = await Note.findOne({ _id: data.id });

    if (!note) {
      throw new AppError('note not found', 404);
    }

    if (note.user_id.toString() !== data.user.id) {
      throw new AppError('Forbidden', 403);
    }

    await Note.findOneAndDelete({ _id: data.id });

    return { note };
  };

  public shareNote = async (data: {
    id: string;
    user_id: string;
    user: { id: string; email: string };
  }) => {
    const note = await Note.findOne({ _id: data.id });

    if (!note) {
      throw new AppError('note not found', 404);
    }

    if (note.user_id.toString() !== data.user.id) {
      throw new AppError('Forbidden', 403);
    }

    const updatedNote = await Note.findOneAndUpdate(
      { _id: data.id },
      { $addToSet: { shared_with: data.user_id } },
      { new: true, runValidators: true },
    );

    return { note: updatedNote };
  };
}

export default AuthService;
