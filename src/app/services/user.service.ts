import { Injectable } from '@angular/core';
import { IUser, IUserRegister, UserStorageKey } from '../models/IUser';
import { HttpClient } from '@angular/common/http';
import { API } from '../shared/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private currentUser: IUser | null = null;
  
  constructor(private http: HttpClient) { }

  registerUser(user: IUserRegister): Observable<string> {
    return this.http.post(API.registration, user, {responseType: 'text'});
  }

  authUser(user: IUser): Observable<string> {
    return this.http.post<string>(API.auth, user);
  }

  getUser(): IUser {
    return this.currentUser;
  }

  setUser(user: IUser): void {
    this.currentUser = user;
    if (user !== null) {
      sessionStorage.setItem(UserStorageKey, user.login);
    } else {
      sessionStorage.setItem(UserStorageKey, '');
    }

  }

  setNewUserPassword(user: IUser): Observable<string> {
    return this.http.post(API.newPasswordSetting, user, {responseType: 'text'});
  }

  setSessionStorageLogin(user: IUser | null): void {
    sessionStorage.setItem(UserStorageKey, user.login);
  }

  // private getUser(login: string): IUser | null {
  //   return this.userStorage.find(user => login === user.login) || null
  // }

  

  // addUser(user: IUser, isRemember?: boolean): true | string {
  //   if (this.getUser(user.login)) {
  //     return "Пользователь с данным именем уже существует!"
  //   }
  //   this.userStorage.push(user);
  //   return true;
  // }

  // checkUser(login: string): boolean {
  //   return !!this.getUser(login);

  // }

  // registerUser(user: IUserRegister): Observable<string> {
  //   return this.http.post(API.registration, user, {responseType: 'text'});
  // }
  // authUser(user: IUser): Observable<string> {
  //   return this.http.post(API.auth, user, {responseType: 'text'});
  // }
}
