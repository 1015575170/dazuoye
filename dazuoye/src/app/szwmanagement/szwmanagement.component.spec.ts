import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzwmanagementComponent } from './szwmanagement.component';

describe('SzwmanagementComponent', () => {
  let component: SzwmanagementComponent;
  let fixture: ComponentFixture<SzwmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzwmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzwmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
