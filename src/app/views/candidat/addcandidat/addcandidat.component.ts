import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcandidat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.scss']
})
export class AddcandidatComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryId: any;
  formData: any = {
    role: 'CANDIDAT'
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Récupérer les catégories disponibles depuis l'API
    this.http.get<any>('http://localhost:8083/public/categories')
      .subscribe(
        response => {
          this.categories = response;
          console.log(this.categories); // Vérifier les données récupérées dans la console
        },
        error => {
          console.log('Erreur lors de la récupération des catégories : ', error);
        }
      );
  }

  submitForm() {
    // Ajouter la logique pour soumettre le formulaire d'ajout de candidat
    this.formData.role = 'CANDIDAT'; // Définir le rôle par défaut comme 'CANDIDAT'
    
    // Convertir l'ID de la catégorie en objet Category
    this.formData.category = { id: this.formData.category_id };

    // POST http://localhost:8083/auth/signup
    this.http.post<any>('http://localhost:8083/auth/signup', this.formData)
      .subscribe(
        response => {
          console.log('Candidat ajouté avec succès : ', response);
          // Réinitialiser le formulaire après avoir soumis avec succès
          this.formData = {
            role: 'CANDIDAT',
            name: '',
            email: '',
            password: '',
            cin: '',
            nbHeurs: 0,
            tel: '',
            category_id: null
          };
        },
        error => {
          console.log('Erreur lors de l\'ajout du candidat : ', error);
          // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
        }
      );
  }
}
