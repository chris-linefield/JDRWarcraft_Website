import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfesangComponent } from './elfesang.component';

describe('ElfesangComponent', () => {
  let component: ElfesangComponent;
  let fixture: ComponentFixture<ElfesangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElfesangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElfesangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
