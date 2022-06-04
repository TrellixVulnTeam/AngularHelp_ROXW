import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoncomponentComponent } from './personcomponent.component';

describe('PersoncomponentComponent', () => {
  let component: PersoncomponentComponent;
  let fixture: ComponentFixture<PersoncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoncomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
