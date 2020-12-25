import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineItemComponent,
    HeaderComponent,
    ErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
