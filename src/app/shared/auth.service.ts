import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLoggedIn = false;
  redirectedUrl: string;

  constructor() { }


  login(login: string, password: string): Observable<boolean> {

    const result = of(true).pipe(delay(1000))

    return result.pipe(
      map((val: boolean) => login === 'admin' && password === '123' ? this.isLoggedIn = val : false)
    );
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(login === 'admin' && password === '123' ? this.isLoggedIn = true : false);
    //   }, 1000);
    // })

  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
