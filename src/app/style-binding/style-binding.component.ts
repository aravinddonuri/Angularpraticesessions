import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isEnable : boolean=false;

  public myStyles ={
    color:"red",
    fontSytle:"italic",
    fontSize: "50px"
  }
}
