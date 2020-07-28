import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from 'rxjs/operators';
import { Store, select } from "@ngrx/store";
import { increment, decrement, reset, add } from '../store/counter.actions';
// import * as fromRoot from '../store';
import { selectCounterCount, getCount, selectUserName, AppState, combine } from '../store'

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent  {
  counter$: Observable<number>;

  x;
 
  constructor(private store: Store<AppState>) {
    console.log(store);
    this.counter$ = store.pipe(select('count'), pluck('counter'));

    

  }

  ngOnInit() {
   this.store.pipe(select(getCount, {multiply: 2})).subscribe(v => {
     console.log(v)
   })
    this.store.pipe(select(selectCounterCount)).subscribe(v => console.log(v));

    this.store.pipe(select(selectUserName)).subscribe(v => console.log(v));

    this.store.pipe(select(combine)).subscribe(a => console.log(a));
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  add() {
    this.store.dispatch(add({amount: 10}))
  }
}
