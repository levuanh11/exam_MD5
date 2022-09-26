import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CreateComponent } from './tour/create/create.component';
import { DeleteComponent } from './tour/delete/delete.component';
import { EditComponent } from './tour/edit/edit.component';
import { ShowComponent } from './tour/show/show.component';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    ShowComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
