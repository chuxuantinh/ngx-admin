import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {
  CrudTableModule, DataTableModule, TreeTableModule, DtToolbarModule, ModalModule, ModalEditFormModule, ScrollerModule,
  TreeViewModule, ContextMenuModule, NotifyModule, DropdownSelectModule, SelectListModule, DragDropModule, DropdownModule,
  DualListBoxModule, DraggableModule, ResizableModule, PaginationModule, ModalSelectModule, InlineEditModule, DynamicFormModule,
  TabsModule, NavMenuModule
} from 'ng-mazdik-lib';

import { TableModule } from 'ngx-easy-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AppPartialsRoutingModule, routedComponents } from './app-partials-routing.module';

import { CrudComponent } from './crud/crud.component';
import { Crud2Component } from './crud2/crud2.component';
import { Crud3Component } from './crud3/crud3.component';
import { PabPlantComponent } from './pabplant/pabplant.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { EspaciosComponent } from './espacios/espacios.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ActasComponent } from './actas/actas.component';

//Otros parciales aquí

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AppPartialsRoutingModule,
    Ng2SmartTableModule,
	
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
  declarations: [
    ...routedComponents,
    CrudComponent,
	Crud2Component,
	Crud3Component,
  PabPlantComponent,
  InventarioComponent,
  ExpedientesComponent,
  EspaciosComponent,
  ArticulosComponent,
  ActasComponent,
	//Otros parciales aquí
  ],
})
export class TablesModule { }
