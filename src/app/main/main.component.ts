import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MainComponent {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'level', 'type'];
  expandedElement: Item | null;

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface Card {
  name: string;
  id: number;
}
export interface CardCombine {
  cards: Card[];
}

export interface Item {
  name: string;
  level: number;
  type: string;
  id: number;
  combinaisons: CardCombine[];
}

const ELEMENT_DATA: Item[] = [{
  name: 'Cape du bouftou',
  level: 30,
  type: 'cape',
  id: 1,
  combinaisons: [ {
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
  name: 'Coiffe du bouftou',
  level: 20,
  type: 'coiffe',
  id: 2,
  combinaisons: [ {
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
  name: 'Ceinture du bouftou',
  level: 200,
  type: 'ceinture',
  id: 1,
  combinaisons: [ {
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
}];
