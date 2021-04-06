import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {Objet} from '../modele';
import {ObjetsService} from '../objets.service';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rechercher-objet',
  templateUrl: './rechercher-objet.component.html',
  styleUrls: ['./rechercher-objet.component.css']
})
export class RechercherObjetComponent implements OnInit {

  objetControl = new FormControl();
  objetFilteredOptions: Objet[] = [];
  objetSelected: Objet;
  options: Objet[] = [];
  isLoading = false;

  constructor(
    private objetsService: ObjetsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.objetControl.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(value => (value?.length > 2 ? this.objetsService.autoComplete(value) : of([]))
          .pipe(
            finalize(() => this.isLoading = false),
          )
        )
      ).subscribe(items => this.objetFilteredOptions = items);

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.objetsService.getObjet(params.id).subscribe(objet => {
          this.objetControl.setValue(objet[0]);
          this.objetSelected = this.objetControl.value;
        });
      }
    });

  }

  displayFn(item: Objet): string {
    return item && item.name ? item.name : '';
  }

  rechercher(): void {
    if (this.objetControl.value && this.objetControl.value.id) {
      this.objetsService.getObjet(this.objetControl.value.id).subscribe(objet => {
        this.objetControl.setValue(objet[0]);
        this.objetSelected = this.objetControl.value;
      });
    }
  }

}
