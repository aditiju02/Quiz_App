import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() que: Question;
  @Input() i: number;
  @Output() queDelete: EventEmitter<Question> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(que: Question){
    this.queDelete.emit(que);
    console.log("Onclick has been triggered.");
  }
}
