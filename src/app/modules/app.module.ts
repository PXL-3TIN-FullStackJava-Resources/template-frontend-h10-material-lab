import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CivilizationListComponent } from '../components/civilization-list/civilization-list.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from '../components/home/home.component';
import { CivDetailDialogComponent } from '../components/civ-detail-dialog/civ-detail-dialog.component';
import { BuildlingListComponent } from '../components/buildling-list/buildling-list.component';
import { BuildingDetailComponent } from '../components/building-detail/building-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CivilizationListComponent,
    HomeComponent,
    CivDetailDialogComponent,
    BuildlingListComponent,
    BuildingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
