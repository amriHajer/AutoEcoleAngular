import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcategorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.scss']
})
export class AddcategorieComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    // POST http://localhost:8083/public/categories
    this.http.post<any>('http://localhost:8083/public/categories', this.formData)
      .subscribe(
        response => {
          console.log('Catégorie ajoutée avec succès : ', response);
          // Réinitialiser le formulaire après avoir soumis avec succès
          this.formData = {};
        },
        error => {
          console.log('Erreur lors de l\'ajout de la catégorie : ', error);
          // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
        }
      );
  }
  
}
