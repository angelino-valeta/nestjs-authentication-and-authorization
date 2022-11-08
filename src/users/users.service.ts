import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'angelino.valeta',
      password: 'Ak2022',
    },
    {
      userId: 2,
      username: 'maria.luisa',
      password: 'guess',
    },
    {
      userId: 3,
      username: 'baptista.capuete',
      password: 'BpC207',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
