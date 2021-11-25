import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTribusInternaComponent } from './header-tribus-interna.component';

describe('HeaderTribusInternaComponent', () => {
  let component: HeaderTribusInternaComponent;
  let fixture: ComponentFixture<HeaderTribusInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTribusInternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTribusInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
