import { Component } from '@angular/core';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [DialogModule, FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  constructor(
    private dialogRef: DialogRef
  ) { }

  close() {
    this.dialogRef.close();
  }

}
