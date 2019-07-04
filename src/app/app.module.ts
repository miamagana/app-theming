import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'layout' },
  { path: 'layout', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'layout' },
];
@NgModule({
  imports: [BrowserModule, CoreModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
