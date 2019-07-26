import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatExpansionModule, MatToolbarModule, MatBadgeModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigningComponent } from './signing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';

const routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'signing', component: SigningComponent },
  { path: 'editor', component: CodeEditorComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    SigningComponent,
    CoursesComponent,
    HomeComponent,
    NavbarComponent,
    CodeEditorComponent,
    CourseDetailsComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SweetAlert2Module.forRoot(),
    MatToolbarModule,
    MatBadgeModule,
    HighlightJsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
