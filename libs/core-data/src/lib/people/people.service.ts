import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@workspace/core';
import { Person } from './person.model';
import { map } from 'rxjs/operators';
import { StarWarsApi } from '../star-wars-api.model';

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

  getPeople(): Observable<Person[]> {
    return this.http.get<StarWarsApi>(this.getUrl())
      .pipe(
        map( (res) => {
          return res.results;
        })
      );
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(this.getUrlForId(id));
  }

}
