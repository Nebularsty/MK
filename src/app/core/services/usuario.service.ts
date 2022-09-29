import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private firestore: AngularFirestore) {}

  //cria um usuario novo com método add
  createUsers(record: any) {
    return this.firestore.collection('Users').add(record);
  }

  ///chama e obtem o registro
  readUsers() {
    return this.firestore.collection('Users').snapshotChanges();
  }

  ///atualiza o registro usando o ID
  uptadeUsers(recordId: any, record: any) {
    this.firestore.doc('Users/' + recordId).update(record);
  }

  ///deleta registros por id
  deleteUsers(recordId: any) {
    this.firestore.doc('Users/' + recordId).delete();
  }
}
