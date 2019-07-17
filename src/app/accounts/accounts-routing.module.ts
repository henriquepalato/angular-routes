import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
