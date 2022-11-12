import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../Option';
import { Question } from '../Question';

@Component({
  selector: 'app-add-opt',
  templateUrl: './add-opt.component.html',
  styleUrls: ['./add-opt.component.css']
})
export class AddOptComponent implements OnInit {
  opt: string;
  sno: number=0;
  @Output() optAdd: EventEmitter<Option> = new EventEmitter();
    // @Output() optAdd: EventEmitter<Option> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit1(): 
  
  void{
    this.sno=this.sno+1;
    const option ={
      opt: this.opt,
      sno: this.sno
    }
    console.log("first console");
    console.log(option);
    // this.onSubmit2(option)

    this.optAdd.emit(option);
   }

  //  onSubmit2(option:Option): 
  
  // void{
  //   console.log(option);

  //   this.optAdd.emit(option);
  //  }
 
    
}