import { ProfileUser } from './../../../../shared/models/ProfileUser';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup;
  ProfileUser: any;

  constructor(private auth: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      nick: new FormControl('', Validators.required),
      bithdate: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  registerUsuarioNovo() {
    this.ProfileUser = this.registerForm.value;

    if (this.registerForm.invalid) return;

    this.auth.registerUser(
      this.registerForm.value.email,
      this.registerForm.value.password
    );
  }
}
