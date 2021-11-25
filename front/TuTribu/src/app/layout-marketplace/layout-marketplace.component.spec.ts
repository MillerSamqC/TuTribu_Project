import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMarketplaceComponent } from './layout-marketplace.component';

describe('LayoutMarketplaceComponent', () => {
  let component: LayoutMarketplaceComponent;
  let fixture: ComponentFixture<LayoutMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
