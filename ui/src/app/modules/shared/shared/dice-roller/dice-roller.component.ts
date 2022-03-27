import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Dice } from 'src/app/models/Dice';


@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  rollResult: number;
  rollLog: Dice[]=[];
  sortedLog: any;
  constructor() { }

 
  ngOnInit(): void {
    
  }

  roll(sides: number): number{
   
    this.rollResult = Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    switch(sides){
      case 4:
        this.rollLog.push({Die: "D4", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      case 6:
        this.rollLog.push({Die: "D6", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      case 8:
        this.rollLog.push({Die: "D8", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      case 10:
        this.rollLog.push({Die: "D10", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      case 12:
        this.rollLog.push({Die: "D12", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      case 20:
        this.rollLog.push({Die: "D20", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      case 100:
        this.rollLog.push({Die: "D100", roll: this.rollResult});
        console.log(JSON.stringify(this.rollLog));
        break;
      default:
        console.log("Looks like something went wrong");
    }
    
     return this.rollResult
   }
   getRollLog(index: number){
     let result: any[]=[];
    for (let i = 0; i < this.rollLog.length; i++){
      switch(index){
        case 0:
          if(this.rollLog[i].Die === "D4"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          case 1:
          if(this.rollLog[i].Die === "D6"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          case 2:
          if(this.rollLog[i].Die === "D8"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          case 3:
          if(this.rollLog[i].Die === "D10"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          case 4:
          if(this.rollLog[i].Die === "D12"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          case 5:
          if(this.rollLog[i].Die === "D20"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          case 6:
          if(this.rollLog[i].Die === "D100"){
            result.push(this.rollLog[i].roll);
            
          }
          break
          default:
          console.log("could not get roll log");
          break
      }
      this.sortedLog = result;
    }

   }

   test(){
    console.log("hi");
   }
}
