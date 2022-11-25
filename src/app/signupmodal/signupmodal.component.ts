
import { Component, OnInit, Input, NO_ERRORS_SCHEMA} from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../User';
import { HttpClient } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { application } from 'express';

@Component({
  selector: 'app-signupmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.css']
})
export class SignupmodalComponent implements OnInit {
  // signupForm!:FormGroup;
  // formValue!:FormGroup;
  // userobj: User = new User;
  
  // constructor(private formBuilder:FormBuilder, private api:ApiService) {
  constructor(private auth: AuthService, private router: Router) {

   }

  ngOnInit(): void {

  }

  registerUser(event){
    event.preventDefault()
    const target=event.target;
    const errors = [];
    const name = target.querySelector('#name').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const cpassword = target.querySelector('#cpassword').value

    console.log("Hello")

   if(password != cpassword) {
    errors.push("Passwords do not match.")
   }
   else{
    console.log("passwords match.")
   }
      
   //more validation

   if(errors.length===0){
      this.auth.registerUser(name, email, password).subscribe(data =>{

        console.log(data)
        console.log("if data success?")
        if(data.success == true){
          console.log("data success")
          this.router.navigate(['createquiz'])
        }
        else{
          console.log("data not success");
        }
      })
   }
  }
}



// registerUser(event){
//   event.preventDefault()
//   const target=event.target;
//   const username = target.querySelector('#username').value;
//   const password = target.querySelector('#password').value;
//   const cpassword = target.querySelector('#cpassword').value

//   this.Auth.getUserDetails(username, password).subscribe(data => {
//     if(data.success){
//       this.router.navigate(['admin'])
//       this.Auth.setRegistered(true)
//     }
//     else{
//       window.alert(data.message)
//     }
//   });
//   console.log(username, password);
// }
