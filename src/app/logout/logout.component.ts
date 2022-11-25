import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

constructor(private user: UserService, private router: Router, private auth: AuthService){
}

ngOnInit(){
  this.user.logout().subscribe(data=>{
    if(data.success){
      this.router.navigate(['/'])
      this.auth.setLoggedIn(false)
    }
    else{
      window.alert('Some problem')
    }
  })
}
}
