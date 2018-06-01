import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Route } from '@angular/compiler/src/core';
import { AsideleftComponent } from './asideleft/asideleft.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ManageMarkComponent } from './manage-mark/manage-mark.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideleftComponent,
    BodyComponent,
    FooterComponent,
    ManageClassesComponent,
    ManageMarkComponent,
    StatisticsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
