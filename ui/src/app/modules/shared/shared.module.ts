import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';
import { TabViewModule } from "primeng/tabview";
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [ 
  
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[ 
    CommonModule, 
    FormsModule,
    InputNumberModule,
    ToolbarModule,
    ButtonModule,
    PanelModule,
    TabMenuModule,
    TabViewModule,
    ChartModule
   ]
})
export class SharedModule { }
