import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
localItem: string | null;
  @Input() quiz: Question[];
  quiz_name: string;
  constructor() { 
    this.localItem = localStorage.getItem("quiz");

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
  }
}

export class quiz{}
export class deleteQue{}