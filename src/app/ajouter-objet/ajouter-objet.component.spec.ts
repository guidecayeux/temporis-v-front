import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterObjetComponent } from './ajouter-objet.component';

describe('AjouterObjetComponent', () => {
  let component: AjouterObjetComponent;
  let fixture: ComponentFixture<AjouterObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterObjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
