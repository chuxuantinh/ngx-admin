/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  CrudTableModule, DataTableModule, TreeTableModule, DtToolbarModule, ModalModule, ModalEditFormModule, ScrollerModule,
  TreeViewModule, ContextMenuModule, NotifyModule, DropdownSelectModule, SelectListModule, DragDropModule, DropdownModule,
  DualListBoxModule, DraggableModule, ResizableModule, PaginationModule, ModalSelectModule, InlineEditModule, DynamicFormModule,
  TabsModule, NavMenuModule
} from 'ng-mazdik-lib';
import { TableModule } from 'ngx-easy-table';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
	
	CrudTableModule,
    DataTableModule,
    TreeTableModule,
    DtToolbarModule,
    ModalModule,
    ModalEditFormModule,
    ScrollerModule,
    TreeViewModule,
    ContextMenuModule,
    NotifyModule,
    DropdownSelectModule,
    SelectListModule,
    DragDropModule,
    DropdownModule,
    DualListBoxModule,
    DraggableModule,
    ResizableModule,
    PaginationModule,
    ModalSelectModule,
    InlineEditModule,
    DynamicFormModule,
	
	TableModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
