import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeUplComponent } from './fe-upl.component';

describe('FeUplComponent', () => {
  let component: FeUplComponent;
  let fixture: ComponentFixture<FeUplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeUplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeUplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
