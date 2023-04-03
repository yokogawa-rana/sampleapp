import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})

export class FormExampleComponent {

  dwellingValues!: FormGroup;

  // Declearing form Controls
  public get selectControl(): FormControl {
    return this.dwellingValues.get('selectControl') as FormControl;
  }
  public get inputControl(): FormControl {
    return this.dwellingValues.get('inputControl') as FormControl;
  }
  public get textControl(): FormControl {
    return this.dwellingValues.get('textControl') as FormControl;
  } 
  public get slideToggleControl(): FormControl {
    return this.dwellingValues.get('slideToggleControl') as FormControl;
  }
  public get checkboxControl1(): FormControl {
    return this.dwellingValues.get('checkboxControl1') as FormControl;
  }
  public get checkboxControl2(): FormControl {
    return this.dwellingValues.get('checkboxControl2') as FormControl;
  } 
  
  public get autoCompleteControl(): FormControl {
    return this.dwellingValues.get('autoCompleteControl') as FormControl;
  } 
  
  public get datePickerControl(): FormControl {
    return this.dwellingValues.get('datePickerControl') as FormControl;
  }  
 
  radioControl = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder) {}

  array: any = []
  ngOnInit() {
    this.dwellingValues = this.fb.group({
      selectControl: new FormControl(''),
      inputControl: new FormControl(''),
      textControl: new FormControl(''),
      slideToggleControl: new FormControl(''),
      checkboxControl1: new FormControl(''),
      checkboxControl2: new FormControl(''),
      radioControl: new FormControl(''),
      autoCompleteControl: new FormControl(''),
      datePickerControl: new FormControl(''),
    });

    this.array = [
      {
        icon: '',
        value: 'All Notifications',
        disabled: false,
        data: 'All Notification',
        id: "1",
      },
      {
        icon: '',
        value: 'Decoratare',
        disabled: true,
        data: 'Decoratare',
        id: "2",
      },
      {
        icon: '',
        value: 'Manage Notifigation',
        disabled: false,
        data: 'Manage Notifigation',
        id: "3",
      },
    ];
    this.onSetvalue();
  }



  onSetvalue(){
    this.dwellingValues.patchValue({
      inputControl: "User Name",
      selectControl: this.array[2].value,
      textControl: "para graph",
      checkboxControl1: true,
      checkboxControl2: true,
    });
   }
 
  onSubmit() {
    console.log(this.dwellingValues.getRawValue()); 
  }
}
