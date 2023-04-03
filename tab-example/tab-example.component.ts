import { Component, OnInit } from '@angular/core';
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
  selector: 'app-tab-example',
  templateUrl: './tab-example.component.html',
  styleUrls: ['./tab-example.component.scss']
})
export class TabExampleComponent implements OnInit {

  constructor() { }
  onMyEvent() {
    alert("Button is trigger");
   }
  ngOnInit(): void {
  }

}
