import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.css']
})
export class TemplatedrivenformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ClickTest(ClickTes: any) {
    console.log(ClickTes.value);
  }
}
