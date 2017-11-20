import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import * as firebase from 'firebase/app';

import { AuthService, User, Status } from '@app/core';

import { UnderConstructionDialogComponent } from './under-construction-dialog/under-construction-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  status: Status;

  constructor(private matDialog: MatDialog,
              public authService: AuthService) {
    // matDialog.open(UnderConstructionDialogComponent);
  }

  ngOnInit() {
    // this.authService.authState
    //   .subscribe(auth => {
    //     this.user = this.authService.user;
    //     this.user.data
    //       .subscribe(userData => {
    //         this.status = userData.status;
    //       });
    //   });

    /*
      Need to add auth guard for this to work,
      found that user.data in authService is null
      after switching to a route and back.
      How come?
    */

    // this.user = this.authService.user;
    // this.authService.user.data
    //   .subscribe(userData => {
    //     this.status = userData.status;
    //   });
  }

  google() {
    this.authService.logInWithProvider(new firebase.auth.GoogleAuthProvider);
  }

  facebook() {
    this.authService.logInWithProvider(new firebase.auth.FacebookAuthProvider);
  }

  twitter() {
    this.authService.logInWithProvider(new firebase.auth.TwitterAuthProvider);
  }

  github() {
    this.authService.logInWithProvider(new firebase.auth.GithubAuthProvider);
  }

}
