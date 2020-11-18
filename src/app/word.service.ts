import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Word, WordType } from './model';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  
  constructor(private firestore: AngularFirestore) {}

  public saveWord(word: Word) {
    const id = this.firestore.createId();
    console.log('Id=', id);
    word.id = id;
    this.firestore
      .collection(word.type.toString())
      .doc(id)
      .set(word)
      .then(
        (res) => console.log('result', res),
        (err) => console.error(err)
      );
  }

  public updateWord(word: Word) {
    this.firestore
      .collection(word.type.toString())
      .doc(word.id)
      .set(word)
      .then(
        (res) => console.log('result', res),
        (err) => console.error(err)
      );
  }

  public readWord(type: WordType): Observable<any[]>{
    return this.firestore.collection(type.toString()).valueChanges();
  }

  public delete(w: any) {
    console.log('delete ', w);
    return this.firestore.collection(w.type.toString()).doc(w.id).delete().then(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
