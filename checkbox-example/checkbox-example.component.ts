import { Component, OnInit } from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss']
})
export class CheckboxExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: MatCheckboxChange, name: string) {
    alert(name + ' is '+ ($event.checked ? 'checked' : 'not checked') +'.');
  }
}
