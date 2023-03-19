import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfenuitComponent } from './elfenuit.component';

describe('ElfenuitComponent', () => {
  let component: ElfenuitComponent;
  let fixture: ComponentFixture<ElfenuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElfenuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElfenuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
