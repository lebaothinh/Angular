import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Route } from '@angular/compiler/src/core';
import { AsideleftComponent } from './asideleft/asideleft.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { ManageMarkComponent } from './manage-mark/manage-mark.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CommonModule } from '@angular/common';
import { ManageStudentsService } from './manage-students/manage-students.service';


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
    AppRoutingModule,
    CommonModule,
    FormsModule,
  
  ],
  providers: [ManageStudentsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
