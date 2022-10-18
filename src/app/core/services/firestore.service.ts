import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { uuidv4 } from '@firebase/util';

interface Users {
  name: string;
  nick: string;
  birthdate: string;
  phone: string;
  email: string;
  password: string;
  uid: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  usersCollection: AngularFirestoreCollection<Users>;
  uid: string | undefined = '';
  users: Observable<Users[]>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.usersCollection = afs.collection<Users>('users');
    this.users = this.usersCollection.valueChanges();
  }

  leituraDeDados() {
    this.usersCollection = this.afs.collection('users', (ref) => {
      return ref.orderBy('name');
    });
  }

  createUser(
    name: string,
    nick: string,
    birthdate: string,
    phone: string,
    email: string,
    password: string
  ) {
    this.auth.onAuthStateChanged((user) => {
      this.uid = user?.uid;
      console.log(this.uid);
      this.usersCollection.add({
        name: name,
        nick: nick,
        birthdate: birthdate,
        phone: phone,
        email: email,
        password: password,
        uid: this.uid,
      });
    });
  }

  leituraDadosUsuario() {
    let leituraDados = this.usersCollection.doc('');
    console.log(leituraDados);
  }
}
