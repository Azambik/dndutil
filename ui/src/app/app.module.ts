import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module'
import { DiceRollerModule } from './modules/shared/shared/dice-roller/dice-roller.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    //import module of a component to accsess it. 
    DiceRollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
