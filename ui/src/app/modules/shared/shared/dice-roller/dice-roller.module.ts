import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { DiceRollerComponent } from '../dice-roller/dice-roller.component';

@NgModule({
  declarations: [
    DiceRollerComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    //export component to other modules
    DiceRollerComponent
  ]
})
export class DiceRollerModule { }
