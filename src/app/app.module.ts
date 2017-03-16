import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HatchMetaConfig } from './config/hatchmeta.config';
import { AppComponent } from './components/app/app.component';

import { AutoFormComponent } from './components/autoform/autoform.component';
import { AutoFieldComponent } from './components/autofield/autofield.component';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';

import { FieldToLabelPipe } from './pipes/fieldToLabel/fieldToLabel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoFormComponent,
    AutoFieldComponent,
    DatetimePickerComponent,
    TagsInputComponent,
    FieldToLabelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
