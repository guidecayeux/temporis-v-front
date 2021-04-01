import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  carte1Control = new FormControl();
  carte2Control = new FormControl();
  carte3Control = new FormControl();
  carte4Control = new FormControl();
  carte5Control = new FormControl();

  options: User[] = [
    {
      id: 1,
      name: 'Mary'},
    {
      id: 2,
      name: 'Shelley'},
    {
      id: 3,
      name: 'Igor'},
    {
      id: 4,
      name: 'George'},
    {
      id: 5,
      name: 'Baptiste'},
    {
      id: 6,
      name: 'Guillaume'},
    {
      id: 7,
      name: 'Rémi'},
    {
      id: 8,
      name: 'Tatalie'}
  ];
  carte1FilteredOptions: Observable<User[]>;
  carte2FilteredOptions: Observable<User[]>;
  carte3FilteredOptions: Observable<User[]>;
  carte4FilteredOptions: Observable<User[]>;
  carte5FilteredOptions: Observable<User[]>;
  public results: string;

  constructor() {
  }

  ngOnInit(): void {

    this.carte1FilteredOptions = this.carte1Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.carte2FilteredOptions = this.carte2Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.carte3FilteredOptions = this.carte3Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.carte4FilteredOptions = this.carte4Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.carte5FilteredOptions = this.carte5Control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  find() {
    this.results = 'liste des cartes' + ' ' +
      this.carte1Control.value?.id + ' ' +
      this.carte2Control.value?.id + ' ' +
      this.carte3Control.value?.id + ' ' +
      this.carte4Control.value?.id + ' ' +
      this.carte5Control.value?.id;
  }
}
