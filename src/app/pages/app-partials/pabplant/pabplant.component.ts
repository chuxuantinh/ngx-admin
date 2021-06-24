import { Component, OnInit, OnDestroy } from '@angular/core';
import { Settings, DataTable } from 'ng-mazdik-lib';
import { getColumnsPabellones, getColumnsPlantas } from './columns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pabellones',
  templateUrl: './pabplant.component.html',
  styleUrls: ['./pabplant.component.scss'],
})

export class PabPlantComponent implements OnInit, OnDestroy {

  dtPabellones: DataTable;
  dtPlantas: DataTable;

  settings: Settings = new Settings({
    bodyHeight: 250,
  });
  private inventory: any = [];
  private subscriptions: Subscription[] = [];

  constructor() {
    const columnsPabellones = getColumnsPabellones();
    for (const column of columnsPabellones) {
      column.editable = false;
    }
    const columnsPlantas = getColumnsPlantas();

    this.dtPabellones = new DataTable(columnsPabellones, this.settings);
    this.dtPlantas = new DataTable(columnsPlantas, this.settings);

    const subSelection = this.dtPabellones.events.selectionSource$.subscribe(() => {
      this.masterChanged();
    });
    this.subscriptions.push(subSelection);
  }

  ngOnInit(): void {
    fetch('assets/data/pabellones.json').then(res => res.json()).then(data => {
      this.dtPabellones.rows = data;
      const masterId = this.dtPabellones.rows[0]['ID_PABELLON'];
      this.dtPabellones.selectRow(0);
      fetch('assets/data/plantas.json').then(res => res.json()).then(inventory => {
        this.inventory = inventory;
        this.dtPlantas.rows = this.inventory.filter((value: any) => {
          return value['ID_PABELLON'] === masterId;
        });
      });

    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  masterChanged(): void {
    const selection = this.dtPabellones.selection.getSelection();
    if (this.dtPabellones.rows.length > 0 && selection.length !== 0 && this.dtPabellones.rows[selection[0]]) {

      const masterId = this.dtPabellones.rows[selection[0]]['ID_PABELLON'];
      this.dtPlantas.rows = this.inventory.filter((value: any) => {
        return value['ID_PABELLON'] === masterId;
      });
    } else {
      this.dtPlantas.rows = [];
    }
  }

}