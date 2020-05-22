import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzwdengluComponent } from './szwdenglu.component';

describe('SzwdengluComponent', () => {
  let component: SzwdengluComponent;
  let fixture: ComponentFixture<SzwdengluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzwdengluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzwdengluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
