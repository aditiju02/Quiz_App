import { Component, OnInit, Input} from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../User';
import { HttpClient } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  // signupForm!:FormGroup;
  // constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }
  constructor(private router: Router, private auth: AuthService) { }

 

  ngOnInit(): void {
  }

  loginUser(event){

    event.preventDefault()
    const target=event.target;
    const errors = []
    const email = target.querySelector('#loginemail').value;
    const password = target.querySelector('#loginpassword').value;
    
    console.log("Hello")
      
   //more validation

    if(errors.length===0){
      this.auth.loginUser(email, password).subscribe(data =>{

        console.log(data)
        if(data.success){
          console.log("data success")
          alert("Login Sussessful");
          this.router.navigate(['/homepage'])

        }
        else{
          alert("Incorrect email or password.")
        }
      })
   }

   }

}

