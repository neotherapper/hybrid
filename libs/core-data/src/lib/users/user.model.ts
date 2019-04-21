export interface UserI {
  uid: string;
  name: string;
  loading?: boolean;
  error?: string;
}

export class User implements UserI {
  constructor(
    public uid: string, public name: string
  ) {}
}
