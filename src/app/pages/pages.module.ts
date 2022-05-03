import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HolamundoComponent } from './holamundo/holamundo.component';

@NgModule({
  imports: [
    RouterModule,
    DashboardModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule
  ],
  declarations: [
    PagesComponent,
    HolamundoComponent,
  ],
})
export class PagesModule {
}
