import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService, private primeConfig: PrimeNGConfig) {}

  users: User[] = [];

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }
  test(){
    console.log("Hello world!");
  }
}