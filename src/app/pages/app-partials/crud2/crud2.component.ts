import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Company, data } from './data';
import { Columns, Config, DefaultConfig, Event } from 'ngx-easy-table';

@Component({
  selector: 'crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Crud2Component  implements OnInit{

  public configuration: Config;
  public columns: Columns[];
  public data2: Company[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.columns = [
      { key: 'phone', title: 'Phone' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
    this.data2 = data;
	console.log("data:"+JSON.stringify(data));
    this.configuration = { ...DefaultConfig };
    this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    // infiniteScrollThrottleTime means how often check if scroll reached end on the collection
    // to load the new items. By default set to 200ms.
    this.configuration.infiniteScrollThrottleTime = 10;
    this.configuration.rows = 10;
  }

  onEvent($event: { event: Event | string; value: any }): void {
    if ($event.event === Event.onInfiniteScrollEnd) {
      this.data2 = [...this.data2, ...this.data2];
	  console.log("data:"+JSON.stringify(this.data2));
      this.cdr.detectChanges();
    }
  }
}
