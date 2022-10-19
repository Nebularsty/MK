import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { doc } from 'firebase/firestore';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup;
  ProfileUser: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      nick: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  registerUsuarioNovo() {
    if (this.registerForm.invalid) return;

    const name = this.registerForm.value.name;
    const nick = this.registerForm.value.nick;
    const birthdate = this.registerForm.value.birthdate;
    const phone = this.registerForm.value.phone;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    this.auth.registerUser(
      this.registerForm.value.email,
      this.registerForm.value.password
    );

    if (email.invalid && password.invalid) return;
    this.firestoreService.createUser(
      name,
      nick,
      birthdate,
      phone,
      email,
      password
    );
  }

  // obterNickUsuario() {
  //   const userNick = doc('users');
  // }
}
