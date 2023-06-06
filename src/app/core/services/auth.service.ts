import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, switchMap, take, tap} from "rxjs";
import {UserModel} from "../models/user.model";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  private readonly authLocalStorageToken: string = `${environment.storageTokenName}`;
  get token(): string | null{
    return localStorage.getItem(this.authLocalStorageToken);
  }
  private _loading$ = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }
  private set loading(value: boolean) {
    this._loading$.next(value);
  }

  private _currentUser$ = new BehaviorSubject<UserModel | null>(null);
  get currentUser$(): Observable<UserModel | null>{
    return this._currentUser$.asObservable();
  }
  private set currentUser(value: UserModel | null){
    this._currentUser$.next(value);
  }

  getUserByToken(): Observable<UserModel | null>{
    this.loading = true;
    return this.http
      .get<UserModel>(`${environment.apiUrl}/Auth/GetCurrentUser`)
      .pipe(
        take(1),
        catchError(err => {
          this.logout();
          return of(null);
        }),
        tap(
          u => {
            this.currentUser = u;
            this.loading = false;
          }
        )
      );
  }

  public logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    this.currentUser = null;
    this.router.navigateByUrl("/auth/login");
  }
}
