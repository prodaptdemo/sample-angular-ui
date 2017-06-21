import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AdminService } from "app/admin/admin.service";
import { HomeComponent } from './home/home.component';
//List of Routes
const appRoutes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'admin', component: AdminComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],

  providers: [AdminService,AdminComponent,HeaderComponent,AppComponent],
 
  bootstrap: [AppComponent]
})
export class AppModule {
 }
 
