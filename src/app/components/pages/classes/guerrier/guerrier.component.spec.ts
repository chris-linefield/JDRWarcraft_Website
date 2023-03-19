import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerrierComponent } from './guerrier.component';

describe('GuerrierComponent', () => {
  let component: GuerrierComponent;
  let fixture: ComponentFixture<GuerrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuerrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
