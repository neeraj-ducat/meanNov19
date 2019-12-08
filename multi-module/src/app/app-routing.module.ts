import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { UserGuard } from './shared/guards/user.guard';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: 'visitor', pathMatch: 'full'},
  {path: 'visitor', loadChildren:'./visitor/visitor.module#VisitorModule'},
  {path: 'user', loadChildren:'./user/user.module#UserModule',
  canActivate: [UserGuard]},
  {path: 'admin', loadChildren:'./admin/admin.module#AdminModule', 
  canActivate: [AdminGuard]},
  {path: 'not-authorized', component: NotAuthorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
