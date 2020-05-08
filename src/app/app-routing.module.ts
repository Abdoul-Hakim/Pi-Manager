import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system/system.component';
import { ProjectsComponent } from './projects/projects.component';
import { DebugComponent } from './debug/debug.component';
import { HomeComponent } from './home/home.component';
import { SnapshotsComponent } from './system/snapshots/snapshots.component';
import { SnapshotcreatorComponent } from './system/snapshots/snapshotcreator/snapshotcreator.component';
import { GpioSpecsComponent } from './system/gpio-specs/gpio-specs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'system', component: SystemComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'debug', component: DebugComponent },
  { path: 'system/snapshots', component: SnapshotsComponent },
  { path: 'system/snapshots/creator', component: SnapshotcreatorComponent },
  { path: 'system/gpiospecs', component: GpioSpecsComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
