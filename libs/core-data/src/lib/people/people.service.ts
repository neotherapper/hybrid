import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { People } from './people.model';
import { environment } from '@workspace/core';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  model = 'people';

  constructor(
    private http: HttpClient
  ) { }

  getUrl(): string {
    return `${environment.starwarsApi}/${this.model}`;
  }

  getUrlForId(id: number): string {
    return `${this.getUrl()}/${id}`;
  }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.getUrl());
  }

  getPersonById(id: number): Observable<People> {
    return this.http.get<People>(this.getUrlForId(id));
  }

}
