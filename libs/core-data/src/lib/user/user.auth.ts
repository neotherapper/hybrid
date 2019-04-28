export interface UserAuthI {
  email: string;
  password: string;
}

export class UserAuth implements UserAuthI {
  constructor(
    public email: string,
    public password: string
  ) {}
}
