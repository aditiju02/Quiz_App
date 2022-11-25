import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface myData {
  email: string,
  status: boolean,
  quote: string
}

interface isLoggedIn {
  status: boolean
}

interface quoteStatus {
  success: boolean
}

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<myData>('/api/data')
  }

  isLoggedIn():Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isLoggedin')
  }

  logout(){
    return this.http.get<logoutStatus>('/api/logout')
  }

  updateQuote(value) {
    return this.http.post<quoteStatus>('/api/quote', {
      value
    })
  }

}
