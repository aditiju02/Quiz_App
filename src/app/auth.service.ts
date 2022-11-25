import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Question } from './createquiz/Question';

interface myData {
  success: boolean,
  message: string
}

interface addQuiz {
  success: boolean,
}

interface registerResponse{
  success: boolean
}

interface loginResponse{
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  // getUserDetails(name, email,  password) {
  //   // post these details to API server return user info if correct
  //   return this.http.post<myData>('/api/auth.php', {
  //     username,
  //     password
  //   })
  // }

  registerUser(name, email, password){
    return this.http.post<registerResponse>('/api/register', {
      name, 
      password, 
      email
    })
  }

  addQuiz(quiz_data: Question[] , code: String, name: String){
    return this.http.post<addQuiz>('/api/addquiz', {
      quiz_data,
      code,
      name
    })
  }

  loginUser(email, password){
    return this.http.post<loginResponse>('/api/login', {
      email,
      password
    })
  }
}

