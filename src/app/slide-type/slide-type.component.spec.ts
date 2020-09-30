import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTypeComponent } from './slide-type.component';

describe('SlideTypeComponent', () => {
  let component: SlideTypeComponent;
  let fixture: ComponentFixture<SlideTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
