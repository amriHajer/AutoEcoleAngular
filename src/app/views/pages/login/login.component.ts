import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormGroup , FormBuilder, FormControl,FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError: string = '';
  userData: any; // Déclarez cette variable dans votre classe LoginComponent

  constructor(
      private formBuilder: FormBuilder,
     // private authService: AuthService,
      private http: HttpClient, // Injectez HttpClient ici
      private router: Router ,

  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }



    submitLoginForm(): void {
        const credentials = this.loginForm.getRawValue();

        this.http.post('http://localhost:8083/auth/signin', credentials)
            .subscribe(
                (response: any) => {
                    // Extraction des informations de l'utilisateur de la réponse
                    const userData = response.users;
                    console.log('Données de l\'utilisateur connecté :', userData);

                    // Redirection basée sur le rôle de l'utilisateur
                    if (userData.role === 'ADMIN') {
                        // this.router.navigate(['admin/dashboard']);
                        this.router.navigate(['dashboard']);
                    } else if (userData.role === 'MONITEUR') {
                        this.router.navigate(['moniteur/dashMoniteur']);
                    } else {
                        // Redirection par défaut si le rôle n'est pas spécifié
                        this.router.navigate(['candidat/home']);
                    }
                },
                (error) => {
                    // Gestion des erreurs
                    console.error('Erreur de connexion :', error);
                    this.loginError = 'Identifiants incorrects. Veuillez réessayer.';
                }
            );
    }

}


