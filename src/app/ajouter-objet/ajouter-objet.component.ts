import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Objet} from '../modele';
import {ObjetsService} from '../services/objets.service';

@Component({
  selector: 'app-ajouter-objet',
  templateUrl: './ajouter-objet.component.html',
  styleUrls: ['./ajouter-objet.component.css']
})
export class AjouterObjetComponent implements OnInit {

  public objet: Objet = {};
  public foods: string[] = ['Arme',
    'Amulette',
    'Anneau',
    'Bottes',
    'Bouclier',
    'Cape',
    'Ceinture',
    'Chapeau',
    'Dofus',
    'Sac à dos',
    'Trophée',
    'Idole',
    'Consommable',
    'Level Up',
    'Autre'];
  public loading = false;
  public erreurFormulaire = false;
  public error = false;

  constructor(
    private dialogRef: MatDialogRef<AjouterObjetComponent>,
    private objetsService: ObjetsService
    ) { }

  ngOnInit(): void {
  }

  valider(): void {
    if (this.objet.name && this.objet.lvl && this.objet.type) {
      this.error = false;
      this.loading = true;
      this.erreurFormulaire = false;

      this.objetsService.addObjet(this.objet).subscribe((objet) => {
        this.loading = false;
        this.dialogRef.close(objet);
      }, () => {
        this.loading = false;
        this.error = true;
      });
    } else {
      this.erreurFormulaire = true;
    }
  }


}
