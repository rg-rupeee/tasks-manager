class AuthService {
  public getNotes = async () => {
    return { message: 'get notes route' };
  };

  public getNote = async () => {
    return { message: 'get note route' };
  };

  public createNote = async () => {
    return { message: 'create note route' };
  };

  public updateNote = async () => {
    return { message: 'update note route' };
  };

  public deleteNote = async () => {
    return { message: 'delete note route' };
  };

  public shareNote = async () => {
    return { message: 'share note route' };
  };
}

export default AuthService;
