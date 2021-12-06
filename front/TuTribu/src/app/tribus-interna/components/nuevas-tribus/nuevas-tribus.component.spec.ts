import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasTribusComponent } from './nuevas-tribus.component';

describe('NuevasTribusComponent', () => {
  let component: NuevasTribusComponent;
  let fixture: ComponentFixture<NuevasTribusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevasTribusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasTribusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
