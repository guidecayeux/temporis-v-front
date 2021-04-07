import {Component, OnDestroy, OnInit} from '@angular/core';
import {Objet} from '../modele';
import {ObjetsService} from '../services/objets.service';


@Component({
  selector: 'app-liste-objets',
  templateUrl: './liste-objets.component.html',
  styleUrls: ['./liste-objets.component.css']
})
export class ListeObjetsComponent implements OnInit, OnDestroy  {
  numberMax = 30;
  dataSource: Objet[] = [];
  currentPool: Objet[] = [];
  listObjets: Objet[] = [];
  currentMaxItem: number = this.numberMax;

  columnsToDisplay: string[] = ['', 'Nom', 'Niveau', 'Type'];

  filtre: any;
  constructor(
    public objetService: ObjetsService
  ) {
  }

  ngOnInit(): void {
    this.objetService.getObjets().subscribe(objets => {
      this.listObjets = objets;
      this.currentPool = objets;
      this.dataSource = objets.slice(0, this.numberMax);
    });
  }

  ngOnDestroy(): void {
    this.dataSource = undefined;
  }

  public previousPage(): void {
    if (this.currentMaxItem > this.numberMax) {
      this.currentMaxItem = this.currentMaxItem - this.numberMax;
      this.dataSource = this.currentPool.slice(this.currentMaxItem - this.numberMax, this.currentMaxItem);
    }
  }
  public nextPage(): void {
    if (this.currentMaxItem < this.currentPool.length - this.numberMax - 1) {
      this.dataSource = this.currentPool.slice(this.currentMaxItem, this.currentMaxItem + this.numberMax);
      this.currentMaxItem = this.currentMaxItem + this.numberMax;
    }
  }

  filter(): void {
    this.currentMaxItem = this.numberMax;
    this.currentPool = this.listObjets.filter(elm => elm.name.toLowerCase().includes(this.filtre.toLowerCase()) || elm.type.toLowerCase().includes(this.filtre.toLowerCase()) || elm.lvl.toString().toLowerCase().includes(this.filtre.toLowerCase()) );
    this.dataSource  =  this.currentPool.slice(0, this.numberMax);
  }
}


