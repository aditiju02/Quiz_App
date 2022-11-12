import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/createquiz/Question';
import { Option } from '../Option';
// import {quiz} from '../quiz/quiz.component'
// import { deleteQue } from '../quiz/quiz.component';

@Component({
  selector: 'app-add-que',
  templateUrl: './add-que.component.html',
  styleUrls: ['./add-que.component.css'],
  styles: [],
})
export class AddQueComponent implements OnInit {
  localItem: string | null;
  que:string;
  ans:string;
  type:string;
  ansno: number;
  option_arr: Option[]=[];
  quiz_name: string;
  // quiz_dup=quiz;
  @Output() quiz: Question[];
  @Output() queAdd: EventEmitter<Question> = new EventEmitter();
  @Input() opt: Option;
  constructor() { 
    this.localItem = localStorage.getItem("option_arr");
  }

  ngOnInit(): void {
  }

  addopt(opt:Option)
  {
    console.log(opt);
    this.option_arr.push(opt);
    localStorage.setItem("option_arr", JSON.stringify(opt));
    console.log("This is option array");
    console.log(this.option_arr);
  }

  deleteOpt(opt:Option){
    console.log(opt);
    const index = this.option_arr.indexOf(opt);
    this.option_arr.splice(index, 1);
    localStorage.setItem("option_arr", JSON.stringify(this.option_arr));
  }

  deleteQue(que:Question){
    console.log(que);
    const index = this.quiz.indexOf(que);
    this.quiz.splice(index, 1);
    localStorage.setItem("quiz", JSON.stringify(this.quiz));
  }

    onSubmit():
    
    void{
      if(this.type=="Options")
      {
          this.ans=this.option_arr[this.ansno-1].opt;
      }
      console.log(this.type);
      console.log(this.ans);

      const question ={
        sno: 8,
        que: this.que,
        ans: this.ans,
        type: this.type,
        option_arr: this.option_arr,
        active: true
      }

      console.log(question);
    this.queAdd.emit(question);
  }

}

