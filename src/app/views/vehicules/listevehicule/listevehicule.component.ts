import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listevehicule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listevehicule.component.html',
  styleUrl: './listevehicule.component.scss'
})
export class ListevehiculeComponent implements OnInit {
  vehicules: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getVehicules();
  }

  getVehicules() {
    this.http.get<any[]>('http://localhost:8083/public/vehicules')
      .subscribe(
        response => {
          this.vehicules = response;
          console.log('Vehicules retrieved: ', this.vehicules);
        },
        error => {
          console.error('Error retrieving vehicules: ', error);
        }
      );
  }

  deleteVehicule(id: number) {
    if (confirm('Are you sure you want to delete this vehicule?')) {
      this.http.delete(`http://localhost:8083/public/vehicules/${id}`)
        .subscribe(
          () => {
            this.vehicules = this.vehicules.filter(vehicule => vehicule.id !== id);
            console.log('Vehicule deleted successfully');
          },
          error => {
            console.error('Error deleting vehicule: ', error);
          }
        );
    }
  }
}