import User from 'src/app/core/models/User.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

interface Users {
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
  public infoUser: any;

  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<Users>('users/EvHUTUvdB0qm9ZopmFmw');
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
    const item: Users = { name, nick, birthdate, phone, email, password };
    this.userCollection.doc(email).set(item);
  }

  readUser(emailUser: string) {
    const path = this.afs.doc<Users>('users/' + emailUser);
    const userDoc = path.valueChanges();

    userDoc.subscribe({
      next: (res: any) => {
        this.infoUser = res;
      },
    });
  }
}
