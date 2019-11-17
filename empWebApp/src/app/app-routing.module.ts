import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: 'new', component: NewEmpComponent},
  {path: 'view', component: ViewEmpComponent},
  {path: 'update', component: UpdateEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
