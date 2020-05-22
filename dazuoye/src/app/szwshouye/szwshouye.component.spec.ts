import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzwshouyeComponent } from './szwshouye.component';

describe('SzwshouyeComponent', () => {
  let component: SzwshouyeComponent;
  let fixture: ComponentFixture<SzwshouyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzwshouyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzwshouyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
