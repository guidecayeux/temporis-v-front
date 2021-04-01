import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetComponent } from './objet.component';

describe('MainComponent', () => {
  let component: ObjetComponent;
  let fixture: ComponentFixture<ObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
