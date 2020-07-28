import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { counterReducer } from "./store/counter.reducer";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter/counter.component";
import { userReducer } from './store/user.reducer';

@NgModule({
  declarations: [
     AppComponent, 
     CounterComponent
   ],
  imports: [
     BrowserModule, 
     StoreModule.forRoot({ 
       count: counterReducer, 
       user: userReducer
      })
   ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
