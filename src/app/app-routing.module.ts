import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'createquiz', component: CreatequizComponent},
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  // { path: 'createquiz', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
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
