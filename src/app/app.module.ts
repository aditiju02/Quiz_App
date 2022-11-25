import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { SigninmodalComponent } from './signinmodal/signinmodal.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreQuizComponent } from './more-quiz/more-quiz.component';
import { AddOptComponent } from './createquiz/add-opt/add-opt.component';
import { AddQueComponent } from './createquiz/add-que/add-que.component';
import { OptionComponent } from './createquiz/option/option.component';
import { QuestionComponent } from './createquiz/question/question.component';
import { QuizComponent } from './createquiz/quiz/quiz.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { SignupmodalComponent } from './signupmodal/signupmodal.component';
// import { CreatequizComponent } from './createquiz/createquiz.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { ResultComponent } from './createquiz/result/result.component';
import { primengComponents, PrimengModule } from './primeNG/primeng.module';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { AttemptComponent } from './attempt/attempt.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { DisplayquizComponent } from './displayquiz/displayquiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    SigninmodalComponent,
    MainComponent,
    routingComponents,
    HomeComponent,
    PageNotFoundComponent,
    MoreQuizComponent,
    AddOptComponent,
    AddQueComponent,
    OptionComponent,
    QuestionComponent,
    QuizComponent,
    CreatequizComponent,
    SignupmodalComponent,
    AboutComponent,
    ResultComponent,
    SanitizeHtmlPipe,
    AttemptComponent,
    HomepageComponent,
    DisplayquizComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    RadioButtonModule,
    ButtonModule,
    primengComponents,
    RouterModule.forRoot([
      {path:'signup', component: SigninmodalComponent },
      { path: 'createquiz', component: CreatequizComponent },
      {path: 'homepage', 
      component: HomeComponent,
    canActivate: [AuthGuard] },
    ])
  ],
  providers: [AuthService, BrowserModule, AppRoutingModule, PrimengModule, HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule {}