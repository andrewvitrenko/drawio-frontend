import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/local-storage';
import { AuthResponse, LoginPayload, RegisterPayload } from '@/types/api/auth';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${environment.backendHost}/auth`;

  constructor(private httpClient: HttpClient) {}

  login(payload: LoginPayload) {
    return this.httpClient
      .post<AuthResponse>(`${this.baseUrl}/login`, payload)
      .pipe(
        map((data) => {
          this.setTokens(data);
          return data;
        }),
      );
  }

  register(payload: RegisterPayload) {
    return this.httpClient
      .post<AuthResponse>(`${this.baseUrl}/signup`, payload)
      .pipe(
        map((data) => {
          this.setTokens(data);
          return data;
        }),
      );
  }

  private setTokens({ access_token, refresh_token }: AuthResponse) {
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
  }
}
