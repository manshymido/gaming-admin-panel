// core/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseUrl = 'https://your-api-url/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl);
  }
}