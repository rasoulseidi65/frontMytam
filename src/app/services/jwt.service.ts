import { MytamwebserviceService } from './mytamwebservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient, service:MytamwebserviceService) { }
  login(email:string, password:string) {
    return this.httpClient.post<{access_token:  string}>('http://www.your-server.com/auth/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}))

}
register(email:string, password:string) {
  return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {email, password}).pipe(tap(res => {
  this.login(email, password)
}))
}
logout() {
  localStorage.removeItem('access_token');
}
}
