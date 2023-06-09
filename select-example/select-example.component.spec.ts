import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleComponent } from './select-example.component';

describe('SelectOverviewExampleComponent', () => {
  let component: SelectExampleComponent;
  let fixture: ComponentFixture<SelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
