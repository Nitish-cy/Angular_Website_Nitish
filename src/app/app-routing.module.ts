import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Common/aboutus/aboutus.component';
import { BlogsComponent } from './Common/blogs/blogs.component';
import { ContactusComponent } from './Common/contactus/contactus.component';
import { HomeComponent } from './Common/home/home.component';
import { LoginComponent } from './Common/login/login.component';
import { RegisterComponent } from './Common/register/register.component';
import { SliderComponent } from './Common/slider/slider.component';
const routes: Routes = [
{
  path:"",
  component:HomeComponent,
},
{
  path:"about",
  component:AboutusComponent,
},
{
  path:"contactus",
  component:ContactusComponent,
},
{
  path:"slider",
  component:SliderComponent,
},
{
  path:"blogs",
  component:BlogsComponent,
},
{
  path:"login",
  component:LoginComponent,
},
{
  path:"registration",
  component:RegisterComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
