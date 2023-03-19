import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleurComponent } from './voleur.component';

describe('VoleurComponent', () => {
  let component: VoleurComponent;
  let fixture: ComponentFixture<VoleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoleurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
