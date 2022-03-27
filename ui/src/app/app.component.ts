import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor(private httpService: HttpService, private primeConfig: PrimeNGConfig, ) {}
  
  users: User[] = [];
  
  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.items = [
      {label: 'home', icon: 'pi pi-fw pi-home'},
      {label: 'Dice', icon: 'fa-solid fa-dice'},
    ];
    this.activeItem = this.items[0];
  }
  
  test(){
    console.log("Hello world!");
  }
}