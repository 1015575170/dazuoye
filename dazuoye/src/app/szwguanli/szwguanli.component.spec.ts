import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzwguanliComponent } from './szwguanli.component';

describe('SzwguanliComponent', () => {
  let component: SzwguanliComponent;
  let fixture: ComponentFixture<SzwguanliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzwguanliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzwguanliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
