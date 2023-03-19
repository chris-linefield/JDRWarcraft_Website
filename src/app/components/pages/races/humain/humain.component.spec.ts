import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumainComponent } from './humain.component';

describe('HumainComponent', () => {
  let component: HumainComponent;
  let fixture: ComponentFixture<HumainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
