import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [

  {path:'app-home',component:HomeComponent},
  {path:'app-about',component:AboutComponent},
  {path:'app-register',component:RegisterComponent},
  {path:'app-exam',component:ExamComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
