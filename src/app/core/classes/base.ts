import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

interface Idwise { id: string }

export abstract class BaseDocument<T extends Idwise> {

  private _doc: AngularFirestoreDocument<T>;
  private _data: Observable<T>;

  constructor(afs: AngularFirestore,
              path: string, extra?: {}) {
    this._doc = afs.doc(path);
    this._data = this._doc.snapshotChanges()
      .map(action => {
        if (action.payload.exists) {
          const data = action.payload.data();
          const id = action.payload.id;
          return { id, ...data, ...extra } as T;
        }
        return null;
      });
  }

  get data() {
    return this._data;
  }

  protected static setHelper<U extends Idwise>(afs: AngularFirestore, path: string, data: U) {
    delete data.id;
    afs.doc(path).set(data);
  }

  protected static updateHelper<U extends Idwise>(afs: AngularFirestore, path: string, data: Partial<U>) {
    delete data.id;
    afs.doc(path).set(data);
  }

}

export abstract class BaseCollection<T extends Idwise> {

  protected _col: AngularFirestoreCollection<T>;
  protected _data: Observable<T[]>;

}
