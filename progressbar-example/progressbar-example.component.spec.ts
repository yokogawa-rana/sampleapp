import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarExampleComponent } from './progressbar-example.component';

describe('ProgressbarExampleComponent', () => {
  let component: ProgressbarExampleComponent;
  let fixture: ComponentFixture<ProgressbarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
