import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpbCcComponent } from './vpb-cc.component';

describe('VpbCcComponent', () => {
  let component: VpbCcComponent;
  let fixture: ComponentFixture<VpbCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpbCcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpbCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
