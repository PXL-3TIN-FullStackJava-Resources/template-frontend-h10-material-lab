import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildlingListComponent } from './components/buildling-list/buildling-list.component';
import { CivilizationListComponent } from './components/civilization-list/civilization-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'civilizations', component: CivilizationListComponent},
  {path: 'buildings', component: BuildlingListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
