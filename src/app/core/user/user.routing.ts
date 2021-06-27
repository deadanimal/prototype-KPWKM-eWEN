import { Routes } from '@angular/router';
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


export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pemohonan',
                children: [
                    {
                        path: 'pemohonan',
                        component: PermohonanComponent
                    },
                    {
                        path: 'awam',
                        component: PemohonanAwamComponent
                    },
                    {
                        path: 'aduan',
                        component: PemohonanAduanComponent
                    },
                    {
                        path: 'pkmd',
                        component: PemohonanPkmdComponent
                    },
                    {
                        path: 'naziran',
                        component: NaziranComponent
                    }
                ]
            },
            {
                path: 'k4k',
                children: [
                    {
                        path: 'penubuhan-pawe',
                        component: PenubuhanPaweComponent
                    },
                    {
                        path: 'penubuhan-pawe-baharu',
                        component: PenubuhanPaweBaharuComponent
                    },
                    {
                        path: 'pemohonan-penubuhan',
                        component: PemohonanPenubuhanComponent
                    },
                    {
                        path: 'pendaftaran-ahli',
                        component: PendaftaranAhliPaweComponent
                    },
                    {
                        path: 'pemohonan-ahli',
                        component: SenaraiPemohonanAhliComponent
                    }
                ]
            },
            {
                path: 'penjagaan-perlindungan',
                children: [
                    {
                        path: 'aduan-maklumat',
                        component: AduanMaklumatComponent
                    },
                ]
            },
            {
                path: 'faq',
                component: FaqComponent
            },
        ]
    }
]