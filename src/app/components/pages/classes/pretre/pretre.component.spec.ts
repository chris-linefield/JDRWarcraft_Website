import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretreComponent } from './pretre.component';

describe('PretreComponent', () => {
  let component: PretreComponent;
  let fixture: ComponentFixture<PretreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
