import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { ErrorComponent } from './error/error.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Injectable()
export class FintDialogService {

  constructor(private dialog: MdDialog) { }

  displayHttpError(error: any): MdDialogRef<ErrorComponent> {
    console.error(error);
    const body = error.json() || '';
    const err = body.message || JSON.stringify(body);
    let errorDialogRef = this.dialog.open(ErrorComponent);
    errorDialogRef.componentInstance.errorSubtitle = `${error.status} ${'- ' + error.statusText || ''}`;
    errorDialogRef.componentInstance.path = body.path;
    errorDialogRef.componentInstance.errorMessage = err;
    return errorDialogRef;
  }

  displayError(subtitle: string, message: string) {
    return this.displayHttpError({ message: message, status: subtitle });
  }

  confirmDelete(): MdDialogRef<ConfirmDeleteComponent> {
    return this.dialog.open(ConfirmDeleteComponent, {
      disableClose: false
    });
  }
}