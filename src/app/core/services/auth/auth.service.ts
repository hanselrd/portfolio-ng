import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { User } from '../../classes/user';

@Injectable()
export class AuthService {

  private _authState: Observable<firebase.User>;
  private _user: User;
  private _statusRef: firebase.database.Reference;

  constructor(private afAuth: AngularFireAuth,
              private afDb: AngularFireDatabase,
              private afs: AngularFirestore) {
    this._authState = afAuth.authState;
    this._authState
      .do(auth => {
        if (auth) {
          this._statusRef = firebase.database().ref(`status/${auth.uid}`);
          firebase.database().ref('.info/connected')
            .on('value', snapshot => {
              if (snapshot.val() === false) return;
              this._statusRef.onDisconnect()
                .set({ status: 'offline', lastUpdated: firebase.database.ServerValue.TIMESTAMP })
                .then(() => {
                  this._updateStatus('online');
                });
            })
        }
      })
      .subscribe(auth => {
        if (auth) {
          this._user = new User(afDb, afs, auth);
        }
      });
  }

  get authState() {
    return this._authState;
  }

  get user() {
    return this._user;
  }

  logInWithProvider(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(auth => {
        let user = new User(this.afDb, this.afs, auth.user);
        user.data.subscribe(data => {
          if (data) {
            data.ip = '0.0.0.0';
            data.platform = window.navigator.platform;
            data.providers = JSON.parse(JSON.stringify(auth.user.providerData));
            User.update(this.afs, auth.user.uid, data);
          } else {
            data = {} as any;
            data.displayName = provider.providerId;
            data.ip = '0.0.0.0';
            data.platform = window.navigator.platform;
            data.providers = JSON.parse(JSON.stringify(auth.user.providerData));
            User.set(this.afs, auth.user.uid, data);
          }
        });
      })
  }

  logOut() {
    this._updateStatus('offline');
    return this.afAuth.auth.signOut();
  }

  private _updateStatus(status: string) {
    this._statusRef.set({ status, lastUpdated: firebase.database.ServerValue.TIMESTAMP });
  }

}
