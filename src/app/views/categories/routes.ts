import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categorie'
    },
    children: [
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      },
      
      

      
      
      {
        path: 'addcategorie',
        loadComponent: () => import('./addcategorie/addcategorie.component').then(m => m.AddcategorieComponent),
        data: {
          title: 'Tables'
        }
      },

      {
        path: 'listcategories',
        loadComponent: () => import('./listcategories/listcategories.component').then(m => m.ListcategoriesComponent),
        data: {
          title: 'Tables'
        }
      },
      
      
    ]
  }
];


