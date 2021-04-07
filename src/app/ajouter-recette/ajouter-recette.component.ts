import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {forkJoin, Observable, of} from 'rxjs';
import {debounceTime, finalize, map, startWith, switchMap, tap} from 'rxjs/operators';
import {User} from '../rechercher-recettes/rechercher-recettes.component';
import {isAdding} from '../util';
import {Carte, Objet} from '../modele';
import {CartesService} from '../services/cartes.service';
import {ObjetsService} from '../services/objets.service';
import {RecettesService} from '../services/recettes.service';
import {MatDialog} from '@angular/material/dialog';
import {AjouterObjetComponent} from '../ajouter-objet/ajouter-objet.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-recette',
  templateUrl: './ajouter-recette.component.html',
  styleUrls: ['./ajouter-recette.component.css']
})
export class AjouterRecetteComponent implements OnInit {

  @ViewChild('recetteForm') recetteForm: NgForm;

  isAdding = isAdding;

  objetControl: { control: FormControl, filterControl: any[] } = {
    control: new FormControl(),
    filterControl: []
  };

  cartesControls: { control: FormControl, filterControl: Observable<Carte[]> }[] = [
    {
      control: new FormControl(),
      filterControl: undefined
    }, {
      control: new FormControl(),
      filterControl: undefined
    }, {
      control: new FormControl(),
      filterControl: undefined
    }, {
      control: new FormControl(),
      filterControl: undefined
    }, {
      control: new FormControl(),
      filterControl: undefined
    }
  ];

  objets: Objet[] = [];

  optionsCartes: Carte[] = [];

  public results: string;
  public isLoading = false;
  public addLoading = false;
  public formulaireNonvalid = false;


  constructor(
    private cartesService: CartesService,
    private objetsService: ObjetsService,
    private recettesService: RecettesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.cartesService.getCartes().subscribe(cartes => {
      this.optionsCartes = cartes;
      this.objetControl.control.valueChanges
        .pipe(
          debounceTime(300),
          tap(() => this.isLoading = true),
          switchMap(value => (value?.length > 2 ? this.objetsService.autoComplete(value) : of([]))
            .pipe(
              finalize(() => this.isLoading = false),
            )
          )
        ).subscribe(items => this.objetControl.filterControl = items);

      this.cartesControls.forEach(control => {

        control.filterControl = control.control.valueChanges
          .pipe(
            debounceTime(200),
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter_cartes(name) : this.optionsCartes.slice())
          );
      });
    });

  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter_cartes(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.optionsCartes.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  ajouterRecette(): void {
    this.formulaireNonvalid = false;
    if (this.isFormulaireValid()) {
      this.addLoading = true;
      const listAjoutCarte = [];

      this.cartesControls.forEach(control => {
        if (this.isAdding(control.control.value)) {
          listAjoutCarte.push(this.cartesService.addCarte(control.control.value));
        } else {
          listAjoutCarte.push(of(control.control.value));
        }
      });

      forkJoin(...listAjoutCarte).subscribe(results => {
        this.recettesService.ajoutRecette({
          idObjet: this.objetControl.control.value.id,
          idCarte1: results[0].id,
          idCarte2: results[1].id,
          idCarte3: results[2].id,
          idCarte4: results[3].id,
          idCarte5: results[4].id
        }).subscribe(() => {
          this.snackBar.open('Ajout effectué', '', {
            duration: 2000,
          });
          this.addLoading = false;
          this.objetControl.control.setValue(undefined);
          this.cartesControls.forEach(control => {
            control.control.setValue('');
          });
        }, (err) => {
          console.log(`erreur lors de l'ajout de recette`, err);
          this.snackBar.open(`Erreur lors de l'ajout`, '', {
            duration: 5000,
          });
          this.addLoading = false;
        });
      }, (err) => {
        console.log(`erreur lors de l'ajout de carte`, err);
        this.snackBar.open(`Erreur lors de l'ajout`, '', {
          duration: 5000,
        });
        this.addLoading = false;
      });
    } else {
      this.formulaireNonvalid = true;
    }
  }

  ajouterObjet(): void {
    const dialogRef = this.dialog.open(AjouterObjetComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.objetControl.control.setValue(result);
    });
  }

  private isFormulaireValid(): boolean {
    return this.objetControl.control.valid && this.objetControl.control.value.id
      && this.cartesControls[0].control.valid && this.cartesControls[1].control.valid
      && this.cartesControls[2].control.valid && this.cartesControls[3].control.valid && this.cartesControls[4].control.valid;
  }
}
