import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurecardComponent } from './configurecard.component';

describe('ConfigurecardComponent', () => {
  let component: ConfigurecardComponent;
  let fixture: ComponentFixture<ConfigurecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
