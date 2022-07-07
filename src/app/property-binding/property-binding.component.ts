import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemImageUrl ="../assets/NaturePic-1.jfif";

  //specific folder
  itemImagefolderUrl ="../assets/Images/Rainy.jpg";

  isDisable= true;
}
