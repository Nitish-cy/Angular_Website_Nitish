import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HomeComponent } from './Common/home/home.component';
import { LoginComponent } from './Common/login/login.component';
import { RegisterComponent } from './Common/register/register.component';
import { AboutusComponent } from './Common/aboutus/aboutus.component';
import { ContactusComponent } from './Common/contactus/contactus.component';
import { BlogsComponent } from './Common/blogs/blogs.component';
import { SliderComponent } from './Common/slider/slider.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ContactusComponent,
    BlogsComponent,
    SliderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
