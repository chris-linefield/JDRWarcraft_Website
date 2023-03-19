import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprouveComponent } from './reprouve.component';

describe('ReprouveComponent', () => {
  let component: ReprouveComponent;
  let fixture: ComponentFixture<ReprouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprouveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReprouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
