import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { KemasukanComponent } from './kemasukan/kemasukan.component';
import { KemasukanPermohonanComponent } from './kemasukan-permohonan/kemasukan-permohonan.component';
import { KemasukanAhliComponent } from './kemasukan-ahli/kemasukan-ahli.component';
import { K4kComponent } from './k4k/k4k.component';
import { PermohonanComponent } from './permohonan/permohonan.component';
import { AduanComponent } from './aduan/aduan.component';
import { FaqComponent } from './faq/faq.component';



export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'kemasukan',
                children: [
                    {
                        path: 'permohonan',
                        component: KemasukanPermohonanComponent
                    },
                    {
                        path: 'permohonan-ahli',
                        component: KemasukanAhliComponent
                    }
                ]
            },
            {
                path: 'k4k',
                component: K4kComponent
            },
            {
                path: 'permohonan',
                component: PermohonanComponent
            },
            {
                path: 'aduan',
                component: AduanComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: 'audit-trails',
                component: ManagementAuditComponent
            },
            // {
            //     path: 'management',
            //     children: [
            //         {
            //             path: 'audit-trails',
            //             component: ManagementAuditComponent
            //         },
            //         {
            //             path: 'user',
            //             component: ManagementUserComponent
            //         }
            //     ]
            // },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]