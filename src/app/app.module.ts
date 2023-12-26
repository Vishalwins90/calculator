import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalulatorComponent } from './calulator/calulator.component';
import { ButtonwrapperComponent } from './buttonwrapper/buttonwrapper.component';
import { ActionComponent } from './action/action.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    CalulatorComponent,
    ButtonwrapperComponent,
    ActionComponent,
    NumberButtonComponent,
    ButtonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
