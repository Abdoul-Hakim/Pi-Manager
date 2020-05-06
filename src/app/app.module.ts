import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { AsideBarComponent } from './design/aside-bar/aside-bar.component';
import { AsideBarItemComponent } from './design/aside-bar/aside-bar-item/aside-bar-item.component';
import { HeaderComponent } from './design/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    AsideBarComponent,
    AsideBarItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DesignComponent, AsideBarComponent, HeaderComponent]
})
export class AppModule { }
