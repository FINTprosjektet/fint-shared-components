import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'fint-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  errorMessage: string = '';
  errorSubtitle: string = '';
  path: string = '';

  constructor(private dialogRef: MatDialogRef<ErrorComponent>) { }
}
