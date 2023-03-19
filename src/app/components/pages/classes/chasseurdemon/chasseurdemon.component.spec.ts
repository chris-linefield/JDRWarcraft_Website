import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseurdemonComponent } from './chasseurdemon.component';

describe('ChasseurdemonComponent', () => {
  let component: ChasseurdemonComponent;
  let fixture: ComponentFixture<ChasseurdemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseurdemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasseurdemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
