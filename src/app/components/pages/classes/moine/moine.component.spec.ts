import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoineComponent } from './moine.component';

describe('MoineComponent', () => {
  let component: MoineComponent;
  let fixture: ComponentFixture<MoineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
