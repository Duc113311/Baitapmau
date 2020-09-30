import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaterProductsComponent } from './later-products.component';

describe('LaterProductsComponent', () => {
  let component: LaterProductsComponent;
  let fixture: ComponentFixture<LaterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaterProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
