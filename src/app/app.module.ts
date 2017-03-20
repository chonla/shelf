import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule, InputTextareaModule, InputTextModule, ChipsModule, FileUploadModule } from 'primeng/primeng';

import { HatchMetaConfig } from './config/hatchmeta.config';
import { AppComponent } from './components/app/app.component';

import { AutoFormComponent } from './components/autoform/autoform.component';
import { AutoFieldComponent } from './components/autofield/autofield.component';

import { FieldToLabelPipe } from './pipes/fieldToLabel/fieldToLabel.pipe';

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
  { path: 'form/:entity', component: AutoFormComponent },
  { path: '**', component: AutoFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AutoFormComponent,
    AutoFieldComponent,
    FieldToLabelPipe
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
    FileUploadModule
  ],
  providers: [
    HatchMetaConfig
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
