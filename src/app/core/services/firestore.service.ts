import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

interface Users {
  name: string;
  nick: string;
  birthdate: string;
  phone: number;
  email: string;
  password: string;
  uid: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  usersCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<Users>('users');
    this.users = this.usersCollection.valueChanges();
  }

  leituraDeDados() {
    this.usersCollection = this.afs.collection('users', (ref) => {
      return ref.orderBy('name');
    });
  }

  createUser(token: any) {
    this.usersCollection.add({
      name: 'Rodrigo',
      nick: 'Ro',
      birthdate: '03042000',
      phone: 1196387140,
      email: '',
      password: '',
      uid: token,
    });
  }
}
