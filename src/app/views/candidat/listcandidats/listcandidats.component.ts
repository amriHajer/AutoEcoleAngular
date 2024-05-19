import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listcandidats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listcandidats.component.html', 
  styleUrls: ['./listcandidats.component.scss']
})
export class ListcandidatsComponent implements OnInit {
  candidats: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCandidats();
  }

  getCandidats() {
    this.http.get<any[]>('http://localhost:8083/public/listCandidatUsers')
      .subscribe(
        response => {
          this.candidats = response;
          console.log('Candidats récupérés : ', this.candidats);
        },
        error => {
          console.error('Erreur lors de la récupération des candidats : ', error);
        }
      );
  }

  deleteCandidat(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce candidat?')) {
      this.http.delete(`http://localhost:8083/public/dltCandidat/${id}`)
        .subscribe(
          () => {
            this.candidats = this.candidats.filter(candidat => candidat.id !== id);
            console.log('Candidat supprimé avec succès');
          },
          error => {
            console.error('Erreur lors de la suppression du candidat : ', error);
          }
        );
    }
  }
}
