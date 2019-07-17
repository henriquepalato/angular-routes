import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AccountsComponent, InfoComponent, DetailsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
