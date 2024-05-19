import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.scss']
})
export class ListcategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get<any[]>('http://localhost:8083/public/categories')
      .subscribe(
        response => {
          this.categories = response;
          console.log('Catégories récupérées : ', this.categories);
        },
        error => {
          console.error('Erreur lors de la récupération des catégories : ', error);
        }
      );
  }

  deleteCategory(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie?')) {
      this.http.delete(`http://localhost:8083/public/categories/${id}`)
        .subscribe(
          () => {
            this.categories = this.categories.filter(category => category.id !== id);
            console.log('Catégorie supprimée avec succès');
          },
          error => {
            console.error('Erreur lors de la suppression de la catégorie : ', error);
          }
        );
    }
  }
}
