import { Note } from '@models/Note/index';

class SearchService {
  public search = async (data: {
    query: string;
    user: { id: string; email: string };
  }) => {
    const notes = await Note.find({
      user_id: data.user.id,
      $text: { $search: data.query },
    });
    return { notes };
  };
}

export default SearchService;
