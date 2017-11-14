import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  private _authState: Observable<firebase.User>;
  // private _user: User;
  private _user: firebase.User;
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
          // this._user = new User(afs, auth);
          this._user = auth;
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
    console.log('provider:', provider.providerId);
    return this.afAuth.auth.signInWithPopup(provider)
      .then(auth => {
        console.log('auth:', auth.user.toJSON());
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
