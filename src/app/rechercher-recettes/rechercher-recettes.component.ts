import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounce, debounceTime, map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {Carte, Objet} from '../modele';
import {RecettesService} from '../services/recettes.service';
import {CartesService} from '../services/cartes.service';
import {isAdding} from '../util';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rechercher-recettes',
  templateUrl: './rechercher-recettes.component.html',
  styleUrls: ['./rechercher-recettes.component.css']
})
export class RechercherRecettesComponent implements OnInit {
  isAdding = isAdding;

  carte1Control = new FormControl();
  carte2Control = new FormControl();
  carte3Control = new FormControl();
  carte4Control = new FormControl();
  carte5Control = new FormControl();

  options: Carte[] = [];

  carte1FilteredOptions: Observable<Carte[]>;
  carte2FilteredOptions: Observable<Carte[]>;
  carte3FilteredOptions: Observable<Carte[]>;
  carte4FilteredOptions: Observable<Carte[]>;
  carte5FilteredOptions: Observable<Carte[]>;
  public results: string;

  dataSource = new MatTableDataSource([]);

  constructor(
    private recettesService: RecettesService,
    private cartesService: CartesService,
    ) {
  }

  ngOnInit(): void {
    this.cartesService.getCartes().subscribe(cartes => {
      this.options = cartes;

      this.carte1FilteredOptions = this.carte1Control.valueChanges
        .pipe(
          debounceTime(200),
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );

      this.carte2FilteredOptions = this.carte2Control.valueChanges
        .pipe(
          debounceTime(200),
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );

      this.carte3FilteredOptions = this.carte3Control.valueChanges
        .pipe(
          debounceTime(200),
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );

      this.carte4FilteredOptions = this.carte4Control.valueChanges
        .pipe(
          debounceTime(200),
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );

      this.carte5FilteredOptions = this.carte5Control.valueChanges
        .pipe(
          debounceTime(200),
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
    });

  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  find(): void {
    const listId: number[] =  [];

    if (this.carte1Control.value && !isAdding(this.carte1Control.value)) {
        listId.push(this.carte1Control.value.id);
    }
    if (this.carte2Control.value && !isAdding(this.carte2Control.value)) {
        listId.push(this.carte2Control.value.id);
    }
    if (this.carte3Control.value && !isAdding(this.carte3Control.value)) {
        listId.push(this.carte3Control.value.id);
    }
    if (this.carte4Control.value && !isAdding(this.carte4Control.value)) {
        listId.push(this.carte4Control.value.id);
    }
    if (this.carte5Control.value && !isAdding(this.carte5Control.value)) {
        listId.push(this.carte5Control.value.id);
    }

    this.recettesService.getRecettes({
      idCartes: listId
    }).subscribe(objets => {
      this.dataSource = new MatTableDataSource<Objet>(objets);
    });
  }

  reset(): void {
    this.carte1Control.setValue('');
    this.carte2Control.setValue('');
    this.carte3Control.setValue('');
    this.carte4Control.setValue('');
    this.carte5Control.setValue('');
  }
}
