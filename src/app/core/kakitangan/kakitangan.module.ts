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
import { KakitanganRoutes } from './kakitangan.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilingKerjaComponent } from './profiling-kerja/profiling-kerja.component';
import { ProfilingKepakaranComponent } from './profiling-kepakaran/profiling-kepakaran.component';
import { ProfilingKesihatanPersekitaranComponent } from './profiling-kesihatan-persekitaran/profiling-kesihatan-persekitaran.component';
import { ProfilingPemetaanComponent } from './profiling-pemetaan/profiling-pemetaan.component';
import { IwePemohonanComponent } from './iwe-pemohonan/iwe-pemohonan.component';
import { IwePemohonanAhliComponent } from './iwe-pemohonan-ahli/iwe-pemohonan-ahli.component';
import { K4kPaweBaharuComponent } from './k4k-pawe-baharu/k4k-pawe-baharu.component';
import { LaporanComponent } from './laporan/laporan.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfilingKerjaComponent,
    ProfilingKepakaranComponent,
    ProfilingKesihatanPersekitaranComponent,
    ProfilingPemetaanComponent,
    IwePemohonanComponent,
    IwePemohonanAhliComponent,
    K4kPaweBaharuComponent,
    LaporanComponent,
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
    RouterModule.forChild(KakitanganRoutes)
  ]
})
export class KakitanganModule { }
