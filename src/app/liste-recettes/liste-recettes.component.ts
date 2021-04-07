import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Objet} from '../modele';
import {RecettesService} from '../services/recettes.service';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListeRecettesComponent implements OnInit {

  @Input()
  dataSource;

  @Input()
  withFilter;

  columnsToDisplay = [{
    id: 'img',
    display: ''
  }, {
    id: 'name',
    display: 'Nom'
  }, {
    id: 'lvl',
    display: 'Niveau'
  }, {
    id: 'type',
    display: 'Type'
  }];
  displayedColumns: any[] = this.columnsToDisplay.map(col => col.id);
  expandedElement: Objet | null;
  constructor(
  ) { }

  ngOnInit(): void {
  }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('datasource', this.dataSource);
  }

}
