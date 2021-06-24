import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPartialsComponent } from './app-partials.component';

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

const routes: Routes = [{
  path: '',
  component: AppPartialsComponent,
  children: [
    {
      path: 'crud',
      component: CrudComponent,
    },
	{
      path: 'crud2',
      component: Crud2Component,
    },
	{
      path: 'crud3',
      component: Crud3Component,
    },
    {
      path: 'pabplant',
      component: PabPlantComponent,
    },
    {
      path: 'inventario',
      component: InventarioComponent,
    },
    {
      path: 'expedientes',
      component: ExpedientesComponent,
    },
    {
      path: 'espacios',
      component: EspaciosComponent,
    },
    {
      path: 'articulos',
      component: ArticulosComponent,
    },
    {
      path: 'actas',
      component: ActasComponent,
    },
	//Otros parciales aquí
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPartialsRoutingModule { }

export const routedComponents = [
  AppPartialsComponent,
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
  
];
