import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Civilization } from '../models/civilization.model';
import { Structure } from '../models/structure.model';
import { Unit } from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class AoeService {

  constructor(private http: HttpClient) { }

  getCivilizations(): Observable<Civilization[]> {
    return this.http.get<Civilization[]>(environment.apiUrl + '/civilizations');
  }

  getUnit(unitUrl: string): Observable<Unit>{
    return this.http.get<Unit>(unitUrl);
  }

  getStructures(): Observable<Structure[]>{
    return this.http.get<Structure[]>(environment.apiUrl + '/structures');
  }
}
