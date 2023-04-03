import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSlideToggle, MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-slide-toggle-example',
  templateUrl: './slide-toggle-example.component.html',
  styleUrls: ['./slide-toggle-example.component.scss']
})
export class SlideToggleExampleComponent implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
  }

  onChange($event: MatSlideToggleChange, name: string, checked: boolean) {
    // alert(name + ' is ' + (checked ? 'selected' : 'not selected.'));
  }
}
