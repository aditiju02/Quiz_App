import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap, map } from "rxjs/operators";
import { difficulty, category, quiz, quizResponse, Result} from "./models";
import { quizData} from "./models";

// export interface quizData{
//   quizdata: JSON
//   success: Boolean
// }


@Injectable({
  providedIn: "root",
})
export class QuizService {
  // private _url: string = "https://opentdb.com/api.php";
  url = ' http://localhost:3000/api/getquiz';
  constructor(private http: HttpClient) {}

  private data;

  private shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  /**
   *
   * @param optionsSelected Object of user selected values to be passed as query params to api
   */
  getQuizQuestions(optionsSelected) {
  }

  //  getQuiz(){
  //   return this.http.get(this.url);
  // }
   getQuiz(): Observable<quizData[]>{
    return this.http.get<quizData[]>(this.url);
  }

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    // this.clearData();
    return temp;
  }


}
