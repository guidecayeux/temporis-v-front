import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {Card} from '../modele';

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
  carte1Control = new FormControl();
  carte2Control = new FormControl();
  carte3Control = new FormControl();
  carte4Control = new FormControl();
  carte5Control = new FormControl();

  options: Card[] = [];
  carte1FilteredOptions: Observable<Card[]>;
  carte2FilteredOptions: Observable<Card[]>;
  carte3FilteredOptions: Observable<Card[]>;
  carte4FilteredOptions: Observable<Card[]>;
  carte5FilteredOptions: Observable<Card[]>;
  public results: string;

  dataSource = new MatTableDataSource([{
    img: 'https://cdn.discordapp.com/attachments/393488773788336151/828288788425080893/Logo_Arme_x20.png',
    name: 'Coiffe du bouftou numéro ',
    lvl: 30,
    type: 'cape',
    id: 1,
    combinaisons: [{
      cards: [{
        id: 1,
        name: 'carte A'
      }, {
        id: 2,
        name: 'carte B'
      }, {
        id: 3,
        name: 'carte C'
      }, {
        id: 4,
        name: 'carte D'
      }, {
        id: 5,
        name: 'carte E'
      }]
    }, {
      cards: [{
        id: 1,
        name: 'carte A'
      }, {
        id: 2,
        name: 'carte B'
      }, {
        id: 3,
        name: 'carte C'
      }, {
        id: 4,
        name: 'carte D'
      }, {
        id: 5,
        name: 'carte E'
      }]
    }]
  }, {
    img: 'https://cdn.discordapp.com/attachments/393488773788336151/828288788425080893/Logo_Arme_x20.png',
    name: 'Cape du bouftou',
    lvl: 30,
    type: 'cape',
    id: 1,
    combinaisons: [{
      cards: [{
        id: 1,
        name: 'carte A'
      }, {
        id: 2,
        name: 'carte B'
      }, {
        id: 3,
        name: 'carte C'
      }, {
        id: 4,
        name: 'carte D'
      }, {
        id: 5,
        name: 'carte E'
      }]
    }, {
      cards: [{
        id: 1,
        name: 'carte A'
      }, {
        id: 2,
        name: 'carte B'
      }, {
        id: 3,
        name: 'carte C'
      }, {
        id: 4,
        name: 'carte D'
      }, {
        id: 5,
        name: 'carte E'
      }]
    }]
  }]);


  constructor() {
    for (let i = 0; i < 643; i++ ) {
      this.options.push({
        id: i,
        name: 'carte numéro ' + i
      });
    }
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

  find(): void {
    this.results = 'liste des cartes' + ' ' +
      this.carte1Control.value?.id + ' ' +
      this.carte2Control.value?.id + ' ' +
      this.carte3Control.value?.id + ' ' +
      this.carte4Control.value?.id + ' ' +
      this.carte5Control.value?.id;
  }

  isAdding(value: any): boolean {
    return typeof value === 'string';
  }
}
