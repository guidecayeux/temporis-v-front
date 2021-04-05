import {Injectable} from '@angular/core';
import {Item} from './modele';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjetsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getObjets(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(environment.url.objets.liste);
  }

  public getObjet(id): Observable<Item> {
    return this.httpClient.get<Item>(environment.url.objets.unitaire + id);
  }

  public autoComplete(name): Observable<Item[]> {
    return this.httpClient.get<Item[]>(environment.url.objets.autocomplete + name);
  }

}
