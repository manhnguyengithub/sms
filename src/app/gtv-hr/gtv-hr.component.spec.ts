import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtvHrComponent } from './gtv-hr.component';

describe('GtvHrComponent', () => {
  let component: GtvHrComponent;
  let fixture: ComponentFixture<GtvHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtvHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtvHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
