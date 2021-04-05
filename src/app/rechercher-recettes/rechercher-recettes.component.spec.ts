import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherRecettesComponent } from './rechercher-recettes.component';

describe('RecettesComponent', () => {
  let component: RechercherRecettesComponent;
  let fixture: ComponentFixture<RechercherRecettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherRecettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherRecettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
