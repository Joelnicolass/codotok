export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public avatar: string,
    public createdAt: Date
  ) {}
}
