import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GitHubService} from './git-hub.service';
import {ResultsListComponent} from './results-list/results-list.component';
import {Convert2KPipe} from './convert2k/convert2k.pipe';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ResultsListComponent,
    Convert2KPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
