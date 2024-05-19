import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Candidat'
    },
    children: [
      {
        path: '',
        redirectTo: 'candidat',
        pathMatch: 'full'
      },
      
      
  
      {
        path: 'addcandidat',
        loadComponent: () => import('./addcandidat/addcandidat.component').then(m => m.AddcandidatComponent),
        data: {
          title: 'Tables'
        }
      },

      {
        path: 'listcandidats',
        loadComponent: () => import('./listcandidats/listcandidats.component').then(m => m.ListcandidatsComponent),
        data: {
          title: 'Tables'
        }
      },
      
    ]
  }
];


