import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaurenComponent } from './tauren.component';

describe('TaurenComponent', () => {
  let component: TaurenComponent;
  let fixture: ComponentFixture<TaurenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaurenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaurenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
