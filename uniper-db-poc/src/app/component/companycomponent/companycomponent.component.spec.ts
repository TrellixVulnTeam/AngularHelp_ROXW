import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycomponentComponent } from './companycomponent.component';

describe('CompanycomponentComponent', () => {
  let component: CompanycomponentComponent;
  let fixture: ComponentFixture<CompanycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
