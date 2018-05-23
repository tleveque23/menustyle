import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationModule } from 'app/navigation/navigation.module';
import { DataTableModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
