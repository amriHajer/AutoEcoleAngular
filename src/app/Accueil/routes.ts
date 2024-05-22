import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      
      
  
      {
        path: 'accueil',
        loadComponent: () => import('./Accueil/accueil.component').then(m => m.AccueilComponent),
        data: {
          title: 'Tables'
        }
      },

      
      {
        path: 'profil',
        loadComponent: () => import('./profil/profil.component').then(m => m.ProfilComponent),
        data: {
          title: 'Tables'
        }
      }
     
    ]
  }
];


