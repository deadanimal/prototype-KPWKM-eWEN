import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { KemasukanComponent } from './kemasukan/kemasukan.component';
import { K4kComponent } from './k4k/k4k.component';
import { PermohonanComponent } from './permohonan/permohonan.component';
import { AduanComponent } from './aduan/aduan.component';
import { FaqComponent } from './faq/faq.component';
import { KemasukanPermohonanComponent } from './kemasukan-permohonan/kemasukan-permohonan.component';
import { KemasukanAhliComponent } from './kemasukan-ahli/kemasukan-ahli.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    KemasukanComponent,
    K4kComponent,
    PermohonanComponent,
    AduanComponent,
    FaqComponent,
    KemasukanPermohonanComponent,
    KemasukanAhliComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
