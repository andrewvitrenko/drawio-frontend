import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPayload, LoginResponse } from '@/types/api/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(payload: LoginPayload) {
    return this.httpClient.post<LoginResponse>(`${environment.backendHost}/auth/login`, payload);
  }
}
