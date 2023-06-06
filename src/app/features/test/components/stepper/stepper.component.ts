import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Observable} from "rxjs";
import {Candidate} from "../../models/candidate.model";
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: [
    './stepper.component.css'
  ]
})
export class StepperComponent implements OnInit{
  candidates$!: Observable<Candidate[]>
  constructor(private test: TestService) {}

  @Input() count = 0
  @Output() change = new EventEmitter()

  increment(): void {
    this.count++
    this.change.emit(this.count)
  }

  decrement(): void {
    this.count--
    this.change.emit(this.count)
  }

  ngOnInit(): void {
   this.initObserver();
   this.loadData();
  }

  private initObserver() {
    this.candidates$ = this.test.candidates$;
  }

  private loadData() {
    // this.test.getAllCandidate();
  }
}
