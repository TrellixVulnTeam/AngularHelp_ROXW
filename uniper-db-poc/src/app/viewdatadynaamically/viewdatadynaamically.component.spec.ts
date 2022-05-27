import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdatadynaamicallyComponent } from './viewdatadynaamically.component';

describe('ViewdatadynaamicallyComponent', () => {
  let component: ViewdatadynaamicallyComponent;
  let fixture: ComponentFixture<ViewdatadynaamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdatadynaamicallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdatadynaamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
