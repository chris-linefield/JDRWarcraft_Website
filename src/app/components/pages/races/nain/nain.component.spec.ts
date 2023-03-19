import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NainComponent } from './nain.component';

describe('NainComponent', () => {
  let component: NainComponent;
  let fixture: ComponentFixture<NainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
