import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addvehicule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addvehicule.component.html',
  styleUrl: './addvehicule.component.scss'
})
export class AddvehiculeComponent {
  formData: any = {
    serie: '',
    categoryId: null
  };
  categories: any[] = [];

  constructor(private http: HttpClient) {
    this.getCategories();
  }

  getCategories() {
    this.http.get<any[]>('http://localhost:8083/public/categories')
      .subscribe(
        response => {
          this.categories = response;
        },
        error => {
          console.error('Error fetching categories: ', error);
        }
      );
  }

  submitForm() {
    const vehiculeData = {
      serie: this.formData.serie,
      category: { id: this.formData.categoryId }
    };

    this.http.post<any>('http://localhost:8083/public/vehicules', vehiculeData)
      .subscribe(
        response => {
          console.log('Vehicule added successfully: ', response);
          // Reset the form after successful submission
          this.formData = {
            serie: '',
            categoryId: null
          };
        },
        error => {
          console.log('Error adding vehicule: ', error);
          // Handle errors here, e.g., show a message to the user
        }
      );
  }
}