import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseurComponent } from './chasseur.component';

describe('ChasseurComponent', () => {
  let component: ChasseurComponent;
  let fixture: ComponentFixture<ChasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
