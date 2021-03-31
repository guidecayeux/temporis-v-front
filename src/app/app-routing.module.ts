import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: MainComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
