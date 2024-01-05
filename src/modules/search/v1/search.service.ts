import { Note } from '@models/Note/note.schema';

class SearchService {
  public search = async (data: {
    query: string;
    user: { id: string; email: string };
  }) => {
    const notes = await Note.find({
      user_id: data.user.id,
      text: new RegExp(data.query, 'i'),
    });
    return { notes };
  };
}

export default SearchService;
