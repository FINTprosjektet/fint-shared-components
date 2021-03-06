import { CommonModule } from '@angular/common';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmDeleteComponent } from './confirm-delete.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmDeleteComponent],
  declarations: [ConfirmDeleteComponent]
})
class ConfirmDeleteSpecModule { }

describe('ConfirmDeleteComponent', () => {
  let component: ConfirmDeleteComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmDeleteSpecModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(ConfirmDeleteComponent);
    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
