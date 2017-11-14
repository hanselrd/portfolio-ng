import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import * as firebase from 'firebase/app';

import { AuthService } from '@app/core';

import { UnderConstructionDialogComponent } from './under-construction-dialog/under-construction-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matDialog: MatDialog,
              public authService: AuthService) {
    // this.matDialog.open(UnderConstructionDialogComponent);
  }

  ngOnInit() {
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
