import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatequizComponent } from './createquiz/createquiz.component';

const routes: Routes = [
  {path: 'createquiz', component: CreatequizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const routingComponents = [CreatequizComponent];
