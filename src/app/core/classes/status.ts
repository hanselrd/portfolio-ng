import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

export interface IStatus {

  status: string;
  lastUpdated: Date;

}

export class Status {

  private _data: Observable<IStatus>;

  constructor(private afDb: AngularFireDatabase,
              id: string) {
    this._data = afDb.object(`status/${id}`).valueChanges();
  }

  get data() {
    return this._data;
  }

}
