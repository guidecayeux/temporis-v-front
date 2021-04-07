import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRechercherObjetComponent } from './input-rechercher-objet.component';

describe('InputRechercherObjetComponent', () => {
  let component: InputRechercherObjetComponent;
  let fixture: ComponentFixture<InputRechercherObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRechercherObjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRechercherObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
