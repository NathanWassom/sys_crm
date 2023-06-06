import {Injectable} from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {Candidate} from "../models/candidate.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TestService {
  private _candidates$: BehaviorSubject<Candidate[]> = new BehaviorSubject<Candidate[]>([]);
  get candidates$(){
    return this._candidates$.asObservable();
  }
  private set candidates(value: Candidate[]){
    this._candidates$.next(value);
  }

  constructor(private http: HttpClient) {}

  getAllCandidate(){
    this.http.get<Candidate[]>(`/candidates`)
      .pipe(
        tap(v => this.candidates = v)
      ).subscribe();
  }
}
