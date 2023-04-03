import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-chips-example',
  templateUrl: './chips-example.component.html',
  styleUrls: ['./chips-example.component.scss']
})
export class ChipsExampleComponent implements OnInit {
  keywords = new Set(['First Item', 'Second Item', 'Third Item']);
 
  
  constructor() { }

  ngOnInit(): void {
  }

  removeChips(keyword: string) {
    this.keywords.delete(keyword);
  }

}
