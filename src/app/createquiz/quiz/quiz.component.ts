import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { QuizService } from 'src/app/quiz.service';
import { UserService } from 'src/app/user.service';
import { Question } from '../Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
localItem: string | null;
  quiz: Question[];
  @Output() sendQuiz: EventEmitter<Question[]> = new EventEmitter();
  constructor(private auth: AuthService, private router: Router, private user: UserService) { 
    this.localItem = localStorage.getItem("quiz");
    this.sendQuiz.emit(this.quiz);

    if(this.localItem == null){
    this.quiz = []
    }
    else{
      this.quiz = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  } 

  deleteQue(que:Question){
    console.log(que);
    const index = this.quiz.indexOf(que);
    this.quiz.splice(index, 1);
    localStorage.setItem("quiz", JSON.stringify(this.quiz));
  }
 
  addQue(que:Question){
    console.log("This is addQue from quiz");
    console.log(que);
    this.quiz.push(que);
    localStorage.setItem("quiz", JSON.stringify(this.quiz));
    this.sendQuiz.emit(this.quiz);
  }

  addQuiz(event){
    event.preventDefault()
    const target=event.target;
    const errors = [];
    const code = target.querySelector('#code').value;
    const name = target.querySelector('#quiz_name').value;
    const quiz_data = this.quiz;

    console.log("Hellohhhh")
      
   //more validation

   if(errors.length===0){
      this.auth.addQuiz(quiz_data, code, name).subscribe(data =>{
        console.log(data)
        console.log("if data success?")
        if(data.success == true){
          console.log("Quiz Added")
          this.router.navigate(['homepage'])
        }
        else{
          console.log("Quiz not Added");
        }
      })
   }
  }
}

export class quiz{}
export class deleteQue{}