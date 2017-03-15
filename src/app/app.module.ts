import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HatchMetaConfig } from './config/hatchmeta.config';
import { AppComponent } from './components/app/app.component';
import { AutoFormComponent } from './components/autoform/autoform.component';
import { AutoFieldComponent } from './components/autofield/autofield.component';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoFormComponent,
    AutoFieldComponent,
    DatetimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HatchMetaConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
