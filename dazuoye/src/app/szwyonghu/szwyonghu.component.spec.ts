import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzwyonghuComponent } from './szwyonghu.component';

describe('SzwyonghuComponent', () => {
  let component: SzwyonghuComponent;
  let fixture: ComponentFixture<SzwyonghuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzwyonghuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzwyonghuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
