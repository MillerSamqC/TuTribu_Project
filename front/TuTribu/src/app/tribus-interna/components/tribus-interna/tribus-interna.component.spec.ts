import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribusInternaComponent } from './tribus-interna.component';

describe('TribusInternaComponent', () => {
  let component: TribusInternaComponent;
  let fixture: ComponentFixture<TribusInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TribusInternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribusInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
