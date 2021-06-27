import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilingKerjaComponent } from './profiling-kerja/profiling-kerja.component';
import { ProfilingKepakaranComponent } from './profiling-kepakaran/profiling-kepakaran.component';
import { ProfilingKesihatanPersekitaranComponent } from './profiling-kesihatan-persekitaran/profiling-kesihatan-persekitaran.component';
import { ProfilingPemetaanComponent } from './profiling-pemetaan/profiling-pemetaan.component';
import { IwePemohonanComponent } from './iwe-pemohonan/iwe-pemohonan.component';
import { IwePemohonanAhliComponent } from './iwe-pemohonan-ahli/iwe-pemohonan-ahli.component';
import { K4kPaweBaharuComponent } from './k4k-pawe-baharu/k4k-pawe-baharu.component';
import { LaporanComponent } from './laporan/laporan.component';

export const KakitanganRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profiling',
                children: [
                    {
                        path: 'kerja',
                        component: ProfilingKerjaComponent
                    },
                    {
                        path: 'kepakaran',
                        component: ProfilingKepakaranComponent
                    },
                    {
                        path: 'kesihatan-persekitaran',
                        component: ProfilingKesihatanPersekitaranComponent
                    },
                    {
                        path: 'pemetaan',
                        component: ProfilingPemetaanComponent
                    }
                ]
            },
            {
                path: 'iwe',
                children: [
                    {
                        path: 'permohonan',
                        component: IwePemohonanComponent
                    },
                    {
                        path: 'permohonan-ahli',
                        component: IwePemohonanAhliComponent
                    }
                ]
            },
            {
                path: 'k4k',
                children: [
                    {
                        path: 'pawe-baharu',
                        component: K4kPaweBaharuComponent
                    },
                ]
            },
            {
                path: 'laporan',
                component: LaporanComponent
            },
        ]
    }
]