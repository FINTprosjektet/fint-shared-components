// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

// Components
import { PagerComponent } from './pager/pager.component';
import { FaStackComponent } from './fontawesome/fa-stack.component';
import { FaComponent } from './fontawesome/fa.component';

// Pipes
import { UtcDatePipe } from './pipes/utc-date.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [
    FaComponent,
    FaStackComponent,
    PagerComponent,

    // Pipes
    HighlightPipe,
    UtcDatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FaComponent,
    FaStackComponent,
    PagerComponent,

    // Pipes
    HighlightPipe,
    UtcDatePipe
  ]
})
export class LibSharedModule { }