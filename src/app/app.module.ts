import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { 
  CalendarModule, InputTextareaModule, InputTextModule, ChipsModule, FileUploadModule,
  EditorModule,SharedModule } from 'primeng/primeng';

import { HatchMetaConfig } from './config/hatchmeta.config';
import { AppComponent } from './components/app/app.component';

import { AutoFormComponent } from './components/autoform/autoform.component';
import { AutoFieldComponent } from './components/autofield/autofield.component';
import { CollapsibleSidebarMenuComponent } from './components/collapsible-sidebar-menu/collapsible-sidebar-menu.component';

import { FieldToLabelPipe } from './pipes/fieldToLabel/fieldToLabel.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EntityGridComponent } from './components/entity-grid/entity-grid.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: 'entity/:entity', component: EntityGridComponent },
  { path: 'form/:entity', component: AutoFormComponent },
  { path: '**', component: AutoFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AutoFormComponent,
    AutoFieldComponent,
    FieldToLabelPipe,
    CollapsibleSidebarMenuComponent,
    SidebarComponent,
    EntityGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    ChipsModule,
    FileUploadModule,
    EditorModule,
    SharedModule
  ],
  providers: [
    HatchMetaConfig,
    FieldToLabelPipe
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
