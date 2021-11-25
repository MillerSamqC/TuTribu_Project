import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMarketplaceComponent } from './header-marketplace.component';

describe('HeaderMarketplaceComponent', () => {
  let component: HeaderMarketplaceComponent;
  let fixture: ComponentFixture<HeaderMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
