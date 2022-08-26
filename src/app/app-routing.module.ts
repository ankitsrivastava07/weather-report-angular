import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'weather-report' , component: WeatherComponent},
  {path: '**' , component: NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
