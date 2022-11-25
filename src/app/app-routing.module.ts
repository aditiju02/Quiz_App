import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { AttemptComponent } from './attempt/attempt.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { DisplayquizComponent } from './displayquiz/displayquiz.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninmodalComponent } from './signinmodal/signinmodal.component';
import { SignupmodalComponent } from './signupmodal/signupmodal.component';


const routes: Routes = [
  { path: 'createquiz', component: CreatequizComponent },
  { path: 'attempt', component: AttemptComponent },
  { path: 'signupmodal', component: SignupmodalComponent },
  { path: 'signinmodal', component: SigninmodalComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'displayquiz', component: DisplayquizComponent },
  {
    path: 'home',
    component: HomeComponent,
    children:
      [
        // { path: 'signup', component: SignupmodalComponent, title: 'sign up' },
        // { path: 'signin', component: SigninmodalComponent, title: 'sign in'}
      ]
  },

  // Wildcard route for a 404 page} },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  // { path: 'createquiz', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },

  {
    path: "404",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [CreatequizComponent, PageNotFoundComponent, HomeComponent];

// @Injectable({providedIn: 'root'})
// export class ResolvedChildATitle implements Resolve<string> {
//   resolve() {
//     return Promise.resolve('signup');
//     return Promise.resolve('signin');
//   }
  
// }