import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
const routesConfig: Routes = [
    { path: 'managestudents', component: ManageStudentsComponent },
    { path: 'managesubjects', component: ManageSubjectsComponent },
    { path: 'managemark', component: ManageMarkComponent},
    { path: 'manageclasses', component: ManageClassesComponent},
    { path: 'statistics', component: StatisticsComponent},
    { path: '', redirectTo: '/managestudents', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent}
  ];

import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ManageMarkComponent } from './manage-mark/manage-mark.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FilterPipe } from './FilterPipe.pipe';
import { ManageStudentsService } from './manage-students/manage-students.service';
@NgModule({
    imports: [
        RouterModule.forRoot(routesConfig),
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ManageStudentsComponent,
        ManageSubjectsComponent,
        PagenotfoundComponent,
        FilterPipe
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}