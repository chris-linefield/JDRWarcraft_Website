import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruideComponent } from './druide.component';

describe('DruideComponent', () => {
  let component: DruideComponent;
  let fixture: ComponentFixture<DruideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DruideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DruideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
