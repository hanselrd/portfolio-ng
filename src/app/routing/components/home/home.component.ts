import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UnderConstructionDialogComponent } from '@app/components/under-construction-dialog/under-construction-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    // this.matDialog.open(UnderConstructionDialogComponent);
  }

}
