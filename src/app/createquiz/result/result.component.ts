import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { quiz } from '../../models';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  finalScore: number = 0;
  quizAnsweredQueries: quiz[];

  constructor(private route: ActivatedRoute) {
    this.quizAnsweredQueries = JSON.parse(
      sessionStorage.getItem("quizResults")
    );

    this.quizAnsweredQueries.forEach((quiz) => {
      if (quiz.selectedAnswer) {
        quiz.selectedAnswer.toString().toLowerCase() ===
        quiz.answer.toString().toLowerCase()
          ? this.finalScore++
          : this.finalScore;
      }
    });
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    sessionStorage.removeItem("quizResults");
  }

}
