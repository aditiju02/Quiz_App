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
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreQuizComponent } from './more-quiz/more-quiz.component';
import { AddOptComponent } from './createquiz/add-opt/add-opt.component';
import { AddQueComponent } from './createquiz/add-que/add-que.component';
import { OptionComponent } from './createquiz/option/option.component';
import { QuestionComponent } from './createquiz/question/question.component';
import { QuizComponent } from './createquiz/quiz/quiz.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
// import { CreatequizComponent } from './createquiz/createquiz.component';

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
    CreatequizComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'signup', component: SigninmodalComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
