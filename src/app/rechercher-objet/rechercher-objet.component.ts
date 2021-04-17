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
  public mobile = false;

  constructor(
    private objetsService: ObjetsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.mobile = true;
    }
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
