import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeUplComponent } from './fe-upl/fe-upl.component';
import { VpbUplComponent } from './vpb-upl/vpb-upl.component';
import { VpbCcComponent } from './vpb-cc/vpb-cc.component';
import { GtvHrComponent } from './gtv-hr/gtv-hr.component';

@NgModule({
  declarations: [
    AppComponent,
    FeUplComponent,
    VpbUplComponent,
    VpbCcComponent,
    GtvHrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
