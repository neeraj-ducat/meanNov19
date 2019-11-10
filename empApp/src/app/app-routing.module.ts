import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewempComponent } from './newemp/newemp.component';
import { EmplistComponent } from './emplist/emplist.component';

const routes: Routes = [
  {path: '', redirectTo: 'create',  pathMatch: 'full'},
  {path: 'create', component: NewempComponent},
  {path: 'list', component: EmplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
