import { Injectable } from '@angular/core';
import { IUser, IUserRegister } from '../models/IUser';
import { HttpClient } from '@angular/common/http';
import { API } from '../shared/api';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userStorage: IUser[] = [];
  private currentUser: IUser | null = null;
  
  constructor(private http: HttpClient) { }

  private getUser(login: string): IUser | null {
    return this.userStorage.find(user => login === user.login) || null
  }

  

  addUser(user: IUser, isRemember?: boolean): true | string {
    if (this.getUser(user.login)) {
      return "Пользователь с данным именем уже существует!"
    }
    this.userStorage.push(user);
    return true;
  }

  checkUser(login: string): boolean {
    return !!this.getUser(login);

  }

  registerUser(user: IUserRegister): void {
    this.http.post(API.registration, user).subscribe();
  }
  authUser(user: IUser): void {
    this.http.post(API.auth, user).subscribe();
  }
}
