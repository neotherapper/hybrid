export interface PersonI {
  birth_year: string,
  eye_color:  string;
  films:      string[];
  gender:     string;
  hair_color: string;
  height:     string;
  homeworld:  string;
  mass:       string;
  name:       string;
  skin_color: string;
  created:    string;
  edited:     string;
  species:    string[];
  starships:  string[];
  url:        string;
  vehicles:   string[];
}

export class Person implements PersonI {
  constructor(
    public birth_year: string,
    public eye_color: string,
    public films: string[],
    public gender: string,
    public hair_color: string,
    public height: string,
    public homeworld: string,
    public mass: string,
    public name: string,
    public skin_color: string,
    public created: string,
    public edited: string,
    public species: string[],
    public starships: string[],
    public url: string,
    public vehicles: string[],
  ) {}
}
