import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraeneiComponent } from './draenei.component';

describe('DraeneiComponent', () => {
  let component: DraeneiComponent;
  let fixture: ComponentFixture<DraeneiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraeneiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraeneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
