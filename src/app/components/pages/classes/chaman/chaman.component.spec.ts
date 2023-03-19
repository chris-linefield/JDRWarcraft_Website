import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamanComponent } from './chaman.component';

describe('ChamanComponent', () => {
  let component: ChamanComponent;
  let fixture: ComponentFixture<ChamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
