import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'lib-autocomplet-example',
  templateUrl: './autocomplet-example.component.html',
  styleUrls: ['./autocomplet-example.component.scss']
})
export class AutocompletExampleComponent implements OnInit {
  data : any
  countries = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'San Antonio'
  ];

  dwellingValues!: FormGroup;

  onSubmit() {
    console.log(this.dwellingValues.getRawValue()); 
  }

  public get searchControl(): FormControl {
    return this.dwellingValues.get('searchControl') as FormControl;
  }


  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {  
    this.dwellingValues = this.fb.group({
      search: new FormControl(''),
    });
  }
  onOptionSelected(event: any) {
  
  }

}
