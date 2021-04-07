import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Objet} from '../modele';
import {ObjetsService} from '../services/objets.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rechercher-objet',
  templateUrl: './rechercher-objet.component.html',
  styleUrls: ['./rechercher-objet.component.css']
})
export class RechercherObjetComponent implements OnInit {

  objetControl = new FormControl();
  objetSelected: Objet;

  constructor(
    private objetsService: ObjetsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.handleChangeObjet(params.id);
      }
    });

  }

  callbackInput(objetRetour: Objet): void {
    this.handleChangeObjet(objetRetour.id);
  }

  private handleChangeObjet(id): void {
    this.objetsService.getObjet(id).subscribe(objet => {
      this.objetControl.setValue(objet[0]);
      this.objetSelected = this.objetControl.value;
    });
  }

}
