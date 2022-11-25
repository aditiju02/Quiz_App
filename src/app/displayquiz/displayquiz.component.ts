import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
// import { quiz, quizData } from '../models';
import { quiz} from '../models';
import { QuizService } from '../quiz.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { primengComponents, PrimengModule } from '../primeNG/primeng.module';

@Component({
  selector: 'app-displayquiz',
  templateUrl: './displayquiz.component.html',
  styleUrls: ['./displayquiz.component.css'],
  providers: [ConfirmationService, DialogService, PrimengModule,
    RadioButtonModule,
    ButtonModule,],
})
export class DisplayquizComponent {
  quizQueries: quiz[];
  val1: string;
  questionNo: number = 0;
  score: number = 0;
  submitConfirm: boolean;
  confirmationContent: string;
  ref: DynamicDialogRef;
  public quizes: any;
  quiznow = this.quizservice.getData();       
  constructor(
    private quizservice: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) {  }

  ngOnInit(){
    this.quizservice.getQuiz()
    .subscribe(data => this.quizes = data)
  }

  prevQuestion() {
    this.questionNo = this.questionNo - 1 < 0 ? 0 : this.questionNo - 1;
  }

  nextQuestion() {
    this.questionNo =
      this.questionNo + 1 > this.quiznow.length - 1
        ? 0
        : this.questionNo + 1;

    this.quiznow[this.questionNo].selectedAnswer;
  }

  submitQuiz() {
    // Calculate unanswered questions count
    // let this.quizQueries = Array.from(this.quizQueries);
    let unAnsweredCnt = this.quiznow.length;
    this.quiznow.forEach((quiz) => {
      quiz.selectedAnswer ? unAnsweredCnt-- : unAnsweredCnt;
    });
    // console.log(unAnsweredCnt);

    // Dialog confirmation Prompt on Submit
    this.submitConfirm = true;
    this.confirmationContent =
      unAnsweredCnt === 0
        ? "Are you sure to submit your Quiz ?"
        : `Hey! you have ${unAnsweredCnt} unanswered ${
            unAnsweredCnt === 1 ? "question" : "questions"
          }. Are you sure to Submit ?`;

    // this.confirmationService.confirm({
    //   header: "QuizMe",
    //   message:
    //     unAnsweredCnt === 0
    //       ? "Are you sure to submit your Quiz ?"
    //       : `Hey! you have ${unAnsweredCnt} unanswered ${
    //           unAnsweredCnt === 1 ? "question" : "questions"
    //         }. Are you sure to Submit ?`,
    //   accept: () => {
    //     this.quizQueries.forEach((quiz) => {
    //       atob(quiz.answer.toString()) === quiz.selectedAnswer
    //         ? this.score++
    //         : this.score;
    //       this.ref = this.dialogService.open(ResultComponent, {
    //         header: "QuizME Results",
    //         width: "70%",
    //         data: {
    //           finalScore: this.score,
    //           quizAnsweredQueries: this.quizQueries,
    //         },
    //       });
    //     });
    //   },
    // });
  }

  onYes() {
    sessionStorage.setItem("quizResults", JSON.stringify(this.quiznow));
    this.router.navigate(["/results"]);
  }
}
