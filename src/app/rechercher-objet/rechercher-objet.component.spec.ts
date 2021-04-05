import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherObjetComponent } from './rechercher-objet.component';

describe('RechercherObjetComponent', () => {
  let component: RechercherObjetComponent;
  let fixture: ComponentFixture<RechercherObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherObjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
