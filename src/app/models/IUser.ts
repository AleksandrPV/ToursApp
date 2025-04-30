export interface IUser {
    login: string;
    password?: string;
}

export interface IUserRegister {
    login: string;
    password?: string;
    email: string;
}

export interface userObj {
    name: string,
    age: number
  }

export const UserStorageKey = 'current_user';