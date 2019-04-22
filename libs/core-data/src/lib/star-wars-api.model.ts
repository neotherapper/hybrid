import { Person } from './people/person.model';

export interface StarWarsApi {
  count: Number,
  next: string,
  previous: string | null,
  results: Person[],
}
