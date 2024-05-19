import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vehicule'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehicules',
        pathMatch: 'full'
      },
      
      
    
      
      
      // {
      //   path: 'add-candidat',
      //   loadComponent: () => import('./add-candidat/add-candidat.component').then(m => m.add-candidat.component),
      //   data: {
      //     title: 'AddCandidat'
      //   }
      // },
      
   
      {
        path: 'addvehicule',
        loadComponent: () => import('./addvehicule/addvehicule.component').then(m => m.AddvehiculeComponent),
        data: {
          title: 'Tables'
        }
      },

      {
        path: 'listvehicules',
        loadComponent: () => import('./listevehicule/listevehicule.component').then(m => m.ListevehiculeComponent),
        data: {
          title: 'Tables'
        }
      },
      
      
    ]
  }
];


