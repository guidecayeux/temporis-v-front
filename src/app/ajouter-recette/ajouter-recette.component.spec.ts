import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecetteComponent } from './ajouter-recette.component';

describe('CartesComponent', () => {
  let component: AjouterRecetteComponent;
  let fixture: ComponentFixture<AjouterRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
