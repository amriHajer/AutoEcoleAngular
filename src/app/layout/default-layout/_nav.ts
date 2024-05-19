import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Theme'
  },
  
  
  {
            
    name: 'Candidat',
    url: '/candidat',
    iconComponent: { name: 'cil-user' },
    children: [
      
      
      
      {
        name: 'Ajouter un candidat',
        url: '/candidat/addcandidat',
        icon: 'nav-icon-bullet'
      },
      
      {
        name: 'lister les candidats',
        url: '/candidat/listcandidats',
        icon: 'nav-icon-bullet'
      },
      
    ]
  },

  {
    name: 'Véhicule',
    url: '/vehicules',
    iconComponent: { name: 'cil-car' },
    children: [
      {
        name: 'Ajouter un véhicules',
        url: '/vehicules/addvehicule',
        icon: 'nav-icon-bullet'
      } ,
      
        {
          name: 'Lister les véhicules ',
          url: '/vehicules/listvehicules',
          icon: 'nav-icon-bullet'
        }
    
    ]
  },
  


  {
    name: 'Categorie',
    url: '/categories',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Ajouter un categories ',
        url: '/categories/addcategorie',
        icon: 'nav-icon-bullet'
      } ,
      
        {
          name: 'Lister les categories ',
          url: '/categories/listcategories',
          icon: 'nav-icon-bullet'
        }
        
      
      
    ]
  },








  
  
  
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
