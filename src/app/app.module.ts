import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { 
  CalendarModule, InputTextareaModule, InputTextModule, ChipsModule, FileUploadModule,
  EditorModule,SharedModule } from 'primeng/primeng';

import { HatchMetaConfig } from './config/hatchmeta.config';
import { AppConfig } from './config/app.config';

import { AppComponent } from './components/app/app.component';

import { FieldToLabelPipe } from './pipes/fieldToLabel/field-to-label.pipe';
import { FieldRenderPipe } from './pipes/fieldRender/field-render.pipe';

import { AutoFormComponent } from './components/autoform/autoform.component';
import { AutoFieldComponent } from './components/autofield/autofield.component';
import { EntityGridComponent } from './components/entity-grid/entity-grid.component';
import { EntityDashboardComponent } from './components/entity-dashboard/entity-dashboard.component';

import { EntityLoaderService } from './services/entity-loader.service';
import { HomeComponent } from './components/home/home.component';

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
  { path: 'entity/:entity', component: EntityDashboardComponent },
  { path: 'form/:entity', component: AutoFormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AutoFormComponent,
    AutoFieldComponent,
    FieldToLabelPipe,
    EntityGridComponent,
    EntityDashboardComponent,
    FieldRenderPipe,
    HomeComponent
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
    AppConfig,
    FieldToLabelPipe,
    EntityLoaderService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
