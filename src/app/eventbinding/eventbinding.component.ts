import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public greetings: string="";
  public clickMessages: string="";
  
  constructor() { }

   
  ngOnInit(): void {
  }
  onClick(){
    this.greetings ="TEst";
    console.log("Test");
  }
  ClickTest(event:any){
this.clickMessages =event;
console.log(this.clickMessages);
  }
  gfg(event:KeyboardEvent) {
    console.log(event);
  }  
} 
