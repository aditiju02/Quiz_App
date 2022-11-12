import { Component, OnInit, Input} from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.css']
})
export class SigninmodalComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  cpassword: string;

  constructor() { }

 

  ngOnInit(): void {
  }

  
  onSubmit(): void
  {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
        session: true
      }
  }
      
}

