import { Component } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  quote = "loading your personal quore"
  email = "Getting your eamil..."
constructor(private user: UserService, private router: Router){}

ngOnInit(){
  this.user.getData().subscribe(data => {
    if(data.status){
    this.quote = data.quote
    this.email = data.email
    }
    else{
      this.router.navigate(['logout'])
    }
  })
}

}
