import { Component, OnInit } from '@angular/core';
import {MatRadioChange} from "@angular/material/radio";
import {MatOptionSelectionChange} from "@angular/material/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss']
})
export class RadioExampleComponent implements OnInit {
  radioControl!: FormControl
  constructor() {
  }

  ngOnInit(): void {
  }

  basicChecked: boolean = false;
  primaryChecked: boolean = false;
  secondaryChecked: boolean = false;
  accentChecked: boolean = false;
  criticalChecked: boolean = false;
  errorChecked: boolean = false;
  warningChecked: boolean = false;
  attentionChecked: boolean = false;
  safaNormalChecked: boolean = false;
  disabledChecked: boolean = false;
 

  onChange(event: MatRadioChange) {
    // alert(event.value + ' is checked.');
  }
}
