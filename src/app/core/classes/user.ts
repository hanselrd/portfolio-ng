import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

import { BaseDocument } from './base';
import { Status, IStatus } from './status';

export interface IUser {

  id: string;
  status: Status;
  providers: firebase.UserInfo[];
  platform: string;
  displayName: string;
  ip: string;

}

export class User extends BaseDocument<IUser> {

  constructor(private afDb: AngularFireDatabase,
              private afs: AngularFirestore,
              auth: firebase.User) {
    super(afs, `users/${auth.uid}`, { status: new Status(afDb, auth.uid) });
  }

  static set(afs: AngularFirestore, id: string, data: IUser) {
    this.setHelper(afs, `users/${id}`, data);
  }

  static update(afs: AngularFirestore, id: string, data: Partial<IUser>) {
    this.updateHelper(afs, `users/${id}`, data);
  }

}
