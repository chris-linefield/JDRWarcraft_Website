import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonisteComponent } from './demoniste.component';

describe('DemonisteComponent', () => {
  let component: DemonisteComponent;
  let fixture: ComponentFixture<DemonisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
