import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeObjetsComponent } from './liste-objets.component';

describe('MainComponent', () => {
  let component: ListeObjetsComponent;
  let fixture: ComponentFixture<ListeObjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeObjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeObjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
