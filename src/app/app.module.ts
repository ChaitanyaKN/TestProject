import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageEditRecipientComponent } from './message-edit-recipient/message-edit-recipient.component';
import { MessageEditRecipientTableComponent } from './message-edit-recipient/message-edit-recipient-table/message-edit-recipient-table.component';
import { MessageEditRecipientFiltersComponent } from './message-edit-recipient/message-edit-recipient-filters/message-edit-recipient-filters.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule,MatRadioModule, MatTableModule, MatFormFieldModule,MatInputModule} from '@angular/material';
import { MessageEditRecipientDragdropComponent } from './message-edit-recipient/message-edit-recipient-dragdrop/message-edit-recipient-dragdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageEditRecipientComponent,
    MessageEditRecipientTableComponent,
    MessageEditRecipientFiltersComponent,
    MessageEditRecipientDragdropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
