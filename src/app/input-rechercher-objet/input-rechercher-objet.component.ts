import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ObjetsService} from '../services/objets.service';
import {Objet} from '../modele';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input-rechercher-objet',
  templateUrl: './input-rechercher-objet.component.html',
  styleUrls: ['./input-rechercher-objet.component.css']
})
export class InputRechercherObjetComponent implements OnInit {

  @Input()
  objetControl: FormControl;

  @Output()
  callBack: EventEmitter<Objet> = new EventEmitter();

  isLoading = false;

  objetFilteredOptions: Objet[] = [];

  constructor(
    private objetsService: ObjetsService
  ) { }

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

    console.log('callbakc', this.callBack);
  }

  rechercher(): void {
    if (this.objetControl.value && this.objetControl.value.id) {
      console.log('emitting', this.objetControl.value);
      this.callBack.emit(this.objetControl.value);
    }
  }

  displayFn(item: Objet): string {
    return item && item.name ? item.name : '';
  }

}
