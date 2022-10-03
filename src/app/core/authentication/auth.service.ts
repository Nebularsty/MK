import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public navbarEvent = new EventEmitter();

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private afs: FirestoreService
  ) {}

  registerUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredencial) => {
        let user = userCredencial.user;
        console.log(user);
        // this.afs.createUser(user);
        this.router.navigate(['']);
      });
  }

  loginGoogle(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  login(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log(result);
        localStorage.setItem('auth_user', JSON.stringify(result));
        this.navbarEvent.emit(true);
        this.router.navigate(['index']);
      })
      .catch((err: any) => {
        this.navbarEvent.emit(false);
        console.error('Erro ao logar', err);
      });
  }

  logout() {
    this.auth.signOut().then((r: any) => {
      this.router.navigate(['']);
      localStorage.clear();
    });
  }
}
