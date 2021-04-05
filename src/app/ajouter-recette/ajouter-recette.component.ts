import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {User} from '../rechercher-recettes/rechercher-recettes.component';

@Component({
  selector: 'app-ajouter-recette',
  templateUrl: './ajouter-recette.component.html',
  styleUrls: ['./ajouter-recette.component.css']
})
export class AjouterRecetteComponent implements OnInit {
  objetControl = new FormControl();
  carte1Control = new FormControl();
  carte2Control = new FormControl();
  carte3Control = new FormControl();
  carte4Control = new FormControl();
  carte5Control = new FormControl();

  objets: any[] = [
    {
      id: 1,
      name: 'Coiffe bouftou',
      level: 20,
      type: 'Chapeau'
    },
    {
      id: 2,
      name: 'Cape bouftou',
      level: 30,
      type: 'Cape'
    },
    {
      id: 3,
      name: 'Ferme la',
      level: 1,
      type: 'Autre'
    }
  ];

  options: User[] = [
    {
      id: 1,
      name: 'Mary eza'
    },
    {
      id: 2,
      name: 'Shelley'
    },
    {
      id: 3,
      name: 'Igor'
    },
    {
      id: 4,
      name: 'George'
    },
    {
      id: 5,
      name: 'Baptiste'
    },
    {
      id: 6,
      name: 'Guillaume'
    },
    {
      id: 7,
      name: 'Rémi'
    },
    {
      id: 8,
      name: 'Tatalie'
    }
  ];
  objetFilteredOptions: Observable<any[]>;
  carte1FilteredOptions: Observable<User[]>;
  carte2FilteredOptions: Observable<User[]>;
  carte3FilteredOptions: Observable<User[]>;
  carte4FilteredOptions: Observable<User[]>;
  carte5FilteredOptions: Observable<User[]>;
  public results: string;

  constructor() {
  }

  ngOnInit(): void {

    this.objetFilteredOptions = this.objetControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter_objet(name) : this.objets.slice())
      );

    this.carte1FilteredOptions = this.carte1Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter_option(name) : this.options.slice())
      );

    this.carte2FilteredOptions = this.carte2Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter_option(name) : this.options.slice())
      );

    this.carte3FilteredOptions = this.carte3Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter_option(name) : this.options.slice())
      );

    this.carte4FilteredOptions = this.carte4Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter_option(name) : this.options.slice())
      );

    this.carte5FilteredOptions = this.carte5Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter_option(name) : this.options.slice())
      );

  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter_objet(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.objets.filter(option => option.name.toLowerCase().includes(filterValue)
      || option.type.toLowerCase().includes(filterValue)
      || option.level.toString().toLowerCase().includes(filterValue));
  }

  private _filter_option(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  ajouterRecette(): void {
    this.results = 'Objet' + ' ' +
      this.objetControl.value?.id + ' ' +
      'liste des cartes' + ' ' +
      this.carte1Control.value?.id + ' ' +
      this.carte2Control.value?.id + ' ' +
      this.carte3Control.value?.id + ' ' +
      this.carte4Control.value?.id + ' ' +
      this.carte5Control.value?.id;
  }

  ajouterObjet() {
    console.log('alo', );

  }
}
