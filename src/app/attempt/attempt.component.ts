import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent {
  title = 'Quiz_App';
  public quizes: any;
  constructor(private quizservice: QuizService){
   
  }

  ngOnInit(){
    this.quizservice.getQuiz()
    .subscribe(data => this.quizes = data)
  }

}
