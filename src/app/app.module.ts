import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SipAppComponent } from './sip-app/sip-app.component';
import { FormsModule } from '@angular/forms';
import { ExpectedamtPipe } from './sip-app/expectedamt.pipe';
import { WealthgainPipe } from './sip-app/wealthgain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SipAppComponent,
    ExpectedamtPipe,
    WealthgainPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
