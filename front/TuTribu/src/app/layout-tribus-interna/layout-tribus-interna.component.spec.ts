import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTribusInternaComponent } from './layout-tribus-interna.component';

describe('LayoutTribusInternaComponent', () => {
  let component: LayoutTribusInternaComponent;
  let fixture: ComponentFixture<LayoutTribusInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTribusInternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTribusInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
