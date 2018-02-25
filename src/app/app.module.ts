import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import{ReactiveFormComponent} from './reactive-form/reactive-form.component'
import { AppComponent } from './app.component';
import {MyCodeServiceService} from './my-code-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MyCodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
