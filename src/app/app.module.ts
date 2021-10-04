import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxTablePaginationModule} from 'ngx-table-pagination';
import { PokeDetailsComponent } from './poke-details.component';
@NgModule({
  declarations: [
    AppComponent,
    PokeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxTablePaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
