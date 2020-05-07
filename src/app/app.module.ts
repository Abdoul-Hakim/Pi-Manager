import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { AsideBarComponent } from './design/aside-bar/aside-bar.component';
import { AsideBarItemComponent } from './design/aside-bar/aside-bar-item/aside-bar-item.component';
import { HeaderComponent } from './design/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemComponent } from './system/system.component';
import { ProjectsComponent } from './projects/projects.component';
import { DebugComponent } from './debug/debug.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpecsComponent } from './system/specs/specs.component';
import { SpecsItemComponent } from './system/specs/specs-item/specs-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    AsideBarComponent,
    AsideBarItemComponent,
    HeaderComponent,
    SystemComponent,
    ProjectsComponent,
    DebugComponent,
    HomeComponent,
    SpecsComponent,
    SpecsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DesignComponent, AsideBarComponent, HeaderComponent, SystemComponent, ProjectsComponent, DebugComponent, HomeComponent]
})
export class AppModule { }
