export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/kemasukan',
    title: 'Kemasukan ke institusi warga emas',
    type: 'sub',
    icontype: 'fas fa-sign-in-alt text-purple',
    collapse: 'kemasukan',
    isCollapsed: true,
    children: [
      { path: 'permohonan', title: 'Senarai permohonan', type: 'link' },
      { path: 'permohonan-ahli', title: 'Senarai permohonan ahli', type: 'link' }
    ]
  },
  {
    path: '/admin/k4k',
    title: 'Permohonan penubuhan PAWE baharu',
    type: 'link',
    icontype: 'fas fa-scroll text-purple'
  },
  {
    path: '/admin/permohonan',
    title: 'Permohonan (Naziran)',
    type: 'link',
    icontype: 'fas fa-user-tie text-purple'
  },
  {
    path: '/admin/aduan',
    title: 'Aduan',
    type: 'link',
    icontype: 'fas fa-exclamation-triangle text-purple'
  },
  {
    path: '/admin/faq',
    title: 'FAQ',
    type: 'link',
    icontype: 'fas fa-question-circle text-purple'
  },
  {
    path: '/admin/audit-trails',
    title: 'Jejak audit',
    type: 'link',
    icontype: 'fas fa-chart-line text-purple'
  },
  {
    path: '/admin/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-purple'
  },
  /*
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  
  
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-primary'
  },
  {
    path: '/user/pemohonan',
    title: 'Pemohonan',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-primary',
    collapse: 'pemohonan',
    isCollapsed: true,
    children: [
      { path: 'pemohonan', title: 'Jenis Pemohonan', type: 'link' },
      { path: 'naziran', title: 'Naziran', type: 'link' }
    ]
  },
  {
    path: '/user/k4k',
    title: 'K4K',
    type: 'sub',
    icontype: 'fas fa-tasks text-primary',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'penubuhan-pawe', title: 'Senarai Penubuhan PAWE', type: 'link' },
      { path: 'penubuhan-pawe-baharu', title: 'Senarai Penubuhan PAWE Baharu', type: 'link' },
      { path: 'pemohonan-penubuhan', title: 'Senarai Pemohonan Penubuhan', type: 'link' },
      { path: 'pendaftaran-ahli', title: 'Pendaftaran Ahli PAWE', type: 'link' },
      { path: 'pemohonan-ahli', title: 'Senarai Pemohonan Ahli', type: 'link' }
    ]
  },
  {
    path: '/user/penjagaan-perlindungan',
    title: 'Penjagaan & Perlindungan Warga Emas',
    type: 'sub',
    icontype: 'fas fa-hand-holding-heart text-primary',
    collapse: 'penjagaan-perlindungan',
    isCollapsed: true,
    children: [
      { path: 'aduan-maklumat', title: 'Aduan/Maklumat', type: 'link' }
    ]
  },
  {
    path: '/user/faq',
    title: 'FAQ',
    type: 'link',
    icontype: 'fas fa-question-circle text-primary'
  },
  /*
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  },
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];

export const ROUTESKT: RouteInfo[] = [
  {
    path: '/kakitangan/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-success'
  },
  {
    path: '/kakitangan/profiling',
    title: 'Profiling Warga Emas',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-success',
    collapse: 'profiling',
    isCollapsed: true,
    children: [
      { path: 'kerja', title: 'Padanan Kerja', type: 'link' },
      { path: 'kepakaran', title: 'Padanan Kepakaran', type: 'link' },
      { path: 'kesihatan-persekitaran', title: 'Padanan Kesihatan & Persekitaran', type: 'link' },
      { path: 'pemetaan', title: 'Padanan Pemetaan', type: 'link' }
    ]
  },
  {
    path: '/kakitangan/iwe',
    title: 'Kemasukan ke Institusi Warga Emas',
    type: 'sub',
    icontype: 'fas fa-hand-holding-heart text-success',
    collapse: 'iwe',
    isCollapsed: true,
    children: [
      { path: 'permohonan', title: 'Senarai Permohonan', type: 'link' },
      { path: 'permohonan-ahli', title: 'Senarai Permohonan Ahli', type: 'link' }
    ]
  },
  {
    path: '/kakitangan/k4k',
    title: 'K4K',
    type: 'sub',
    icontype: 'fas fa-scroll text-success',
    collapse: 'k4k',
    isCollapsed: true,
    children: [
      { path: 'pawe-baharu', title: 'Permohonan Penubuhan PAWE Baharu', type: 'link' },
    ]
  },
  {
    path: '/kakitangan/laporan',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-success'
  },
];