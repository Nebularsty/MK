import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

interface Users {
  id: string;
  name: string;
  nick: string;
  birthdate: string;
  phone: string;
  email: string;
  password: string;
  // uid: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private itemDoc: AngularFirestoreDocument<Users>;
  userCollection: any;
  user: Observable<Users | undefined>;
  uid: string | undefined = '';

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.itemDoc = afs.doc<Users>('items/1');
    this.user = this.itemDoc.valueChanges();
    this.userCollection = afs.collection<Users>('users');
  }

  createUser(
    name: string,
    nick: string,
    birthdate: string,
    phone: string,
    email: string,
    password: string
  ) {
    const id = this.afs.createId();
    const item: Users = { id, name, nick, birthdate, phone, email, password };
    this.userCollection.doc(id).set(item);
  }

  leituraDadosUsuario(userId: any) {
    let leituraDados = this.afs.collection('users').doc(userId).get();

    console.log(leituraDados);
  }
}
