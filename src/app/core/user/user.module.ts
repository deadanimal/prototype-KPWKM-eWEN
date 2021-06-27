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
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermohonanComponent } from './permohonan/permohonan.component';
import { PenubuhanPaweComponent } from './penubuhan-pawe/penubuhan-pawe.component';
import { PenubuhanPaweBaharuComponent } from './penubuhan-pawe-baharu/penubuhan-pawe-baharu.component';
import { PemohonanPenubuhanComponent } from './pemohonan-penubuhan/pemohonan-penubuhan.component';
import { PendaftaranAhliPaweComponent } from './pendaftaran-ahli-pawe/pendaftaran-ahli-pawe.component';
import { SenaraiPemohonanAhliComponent } from './senarai-pemohonan-ahli/senarai-pemohonan-ahli.component';
import { AduanMaklumatComponent } from './aduan-maklumat/aduan-maklumat.component';
import { FaqComponent } from './faq/faq.component';
import { NaziranComponent } from './naziran/naziran.component';
import { PemohonanAwamComponent } from './pemohonan-awam/pemohonan-awam.component';
import { PemohonanAduanComponent } from './pemohonan-aduan/pemohonan-aduan.component';
import { PemohonanPkmdComponent } from './pemohonan-pkmd/pemohonan-pkmd.component';

@NgModule({
  declarations: [DashboardComponent, PermohonanComponent, PenubuhanPaweComponent, PenubuhanPaweBaharuComponent, PemohonanPenubuhanComponent, PendaftaranAhliPaweComponent, SenaraiPemohonanAhliComponent, AduanMaklumatComponent, FaqComponent, NaziranComponent, PemohonanAwamComponent, PemohonanAduanComponent, PemohonanPkmdComponent],
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
    RouterModule.forChild(UserRoutes),
    CarouselModule.forRoot(),
    RatingModule.forRoot()
  ]
})
export class UserModule { }
