import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpbUplComponent } from './vpb-upl.component';

describe('VpbUplComponent', () => {
  let component: VpbUplComponent;
  let fixture: ComponentFixture<VpbUplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpbUplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpbUplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
