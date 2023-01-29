import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { TodoModule } from '@modules/todo/todo.module';
import { LandingModule } from '@modules/landing/landing.module';
import { ShellModule } from './shared/containers/shell/shell.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule,
    LandingModule,
    TodoModule,

    ShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
