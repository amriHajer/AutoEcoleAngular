import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  
  {
    path: '',
     //redirectTo: 'dashboard',
     redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      
      
      

      {
        path: 'vehicules',
        loadChildren: () => import('./views/vehicules/routes').then((m) => m.routes)
      },
      {
        path: 'categories',
        loadChildren: () => import('./views/categories/routes').then((m) => m.routes)
      },
      {
        path: 'candidat',
        loadChildren: () => import('./views/candidat/routes').then((m) => m.routes)
      },
      
      /******************************** */
      // {
      //   path: 'accueil',
      //   loadChildren: () => import('./views/accueil/routes').then((m) => m.routes)
      // } ,
      /********************************* */
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
/**************************** */
 {
    path: 'accueil',
    loadChildren: () => import('./Accueil/routes').then((m) => m.routes) // Corrigez le chemin ici
  } ,
 
/***************************** */
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },

  //{ path: '**', redirectTo: 'dashboard' }
  { path: '**', redirectTo: 'login' } ,
  
  
];
