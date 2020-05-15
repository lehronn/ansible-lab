class UsersService {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  addUser(user) {
    this.users = [user, ...this.users];
  }

  removeUser(userId) {
    //metoda tablicy filter tworzy nową tablicę z elementami które spełniają dane kryterium.
    //metoda delete do obiektów, przy tablicach indexOf(aktualny index wyszukiwanego elementu) .slice .split
    this.users = this.users.filter(user => user.id !== userId);
  }
}
module.exports = UsersService;
