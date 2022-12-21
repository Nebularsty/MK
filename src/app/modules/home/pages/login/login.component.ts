import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) return;

    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }

  loginWithGoogle() {
    this.authService.loginGoogle().then((u: firebase.auth.UserCredential) => {
      console.log(u);
      this.router.navigate(['index']);
    });
  }

  paginaCadastroBotao() {
    this.router.navigate(['cadastro']);
  }
}
