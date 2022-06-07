import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertsuccesscardComponent } from './insertsuccesscard.component';

describe('InsertsuccesscardComponent', () => {
  let component: InsertsuccesscardComponent;
  let fixture: ComponentFixture<InsertsuccesscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertsuccesscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertsuccesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
