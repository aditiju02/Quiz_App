import { AfterViewChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

// interface Quizlist{
//   id: Number,
//   name: String,
//   code: String,
//   quiz_data:[]
// }

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})

export class BackgroundComponent implements OnInit {
  public quizes: any;
  quiznow = []
  result: any;

  constructor(private quizservice: QuizService, private router: Router) { }

  ngOnInit(){
    this.quizservice.getQuiz()
    .subscribe(data => this.quizes = data)
  }

  entercode(event){
    event.preventDefault()
    const target=event.target;
    const errors = [];
    const code = target.querySelector('#code').value;

    console.log("Hellocode")
    console.log(this.quizes.result)

    let flag =0;
    for (let i = 0; i < this.quizes.result.length; i++) {
      if(code == this.quizes.result[i].code)
      {
        this.quiznow = this.quizes.result[i].quiz_data;
        console.log("Quiznow -> ", this.quiznow);

        this.quizservice.setData(this.quiznow);

        this.router.navigate(['attempt'])
        flag = 1;
      }
    }

    if(flag == 0)
    {
       alert("Incorrect code");
    }

  }

  transfer(quiznow: any[])
  {
  
  }

}