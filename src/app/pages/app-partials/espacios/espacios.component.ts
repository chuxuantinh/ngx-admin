import { Component, OnInit } from '@angular/core';
import { CdtSettings, DataManager, SelectItem, DtMessages, DtMessagesEn } from 'ng-mazdik-lib';
import { DemoService } from './demo.service';
import { getColumnsEspacios } from './columns';

@Component({
  selector: 'espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss'],
})
export class EspaciosComponent implements OnInit{

  dataManagerEspacios: DataManager;

  settings: CdtSettings = new CdtSettings({
    crud: true,
    bodyHeight: 380,
    exportAction: true,
    globalFilter: true,
    columnToggleAction: true,
    clearAllFiltersAction: true,
  });

  messages: DtMessages = new DtMessagesEn({
    titleDetailView: 'Room details',
    titleCreate: 'Create a new room'
  });

  constructor(private service: DemoService) {
    const columns = getColumnsEspacios();
    columns.forEach((x, i) => (i > 0) ? x.editable = true : x.editable = false);
    columns[4].filterValues = this.filterValuesFunc;
    this.dataManagerEspacios = new DataManager(columns, this.settings, this.service, this.messages);
    this.dataManagerEspacios.pager.perPage = 20;
  }

  ngOnInit(): void { }

  filterValuesFunc(columnName: string): Promise<SelectItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(
        [
          { id: 'MALE', name: 'MALE' },
          { id: 'FEMALE', name: 'FEMALE' },
        ]
      ), 1000);
    });
  }

}
