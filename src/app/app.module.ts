import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GradeComponent } from './grade/grade.component';
import { SubjectComponent } from './subject/subject.component';
import { SubmissionComponent } from './submission/submission.component';    
import {​ RouterModule }​ from'@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GradeComponent,
    SubjectComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'grade', component: GradeComponent},    
      {path: 'subject', component: SubjectComponent},    
      {path: 'submission', component: SubmissionComponent},                           
                       
                       
        

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
