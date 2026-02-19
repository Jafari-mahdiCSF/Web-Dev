import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserDto { id: number; name: string; }

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<UserDto[]>('/assets/mock-users.json');
  }
}

