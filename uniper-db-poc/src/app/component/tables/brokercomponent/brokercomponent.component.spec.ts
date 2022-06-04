import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokercomponentComponent } from './brokercomponent.component';

describe('BrokercomponentComponent', () => {
  let component: BrokercomponentComponent;
  let fixture: ComponentFixture<BrokercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
