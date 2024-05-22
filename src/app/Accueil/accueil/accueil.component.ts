import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {
  user: any;
  constructor(private router: Router) {}

  ngOnInit() {
    // Récupérer les données de l'utilisateur depuis localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }


  
  logout() {
    // Effacer les données de l'utilisateur du localStorage
   // localStorage.removeItem('user');
    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }
}