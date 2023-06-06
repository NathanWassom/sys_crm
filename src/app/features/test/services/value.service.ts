import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  getValue() {
    return 'real value';
  }

  getObservableValue(): Observable<string> {
    return of<string>('observable value');
  }

  getPromiseValue(): Promise<string> {
    return new Promise(
      (resolve) => {
        resolve('promise value')
      }
    )
  }
}
