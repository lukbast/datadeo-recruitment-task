import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Data } from '../types';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: Data[] = []

  constructor(private dataService: DataService) {
    
  }

  private filterPending(value:Data, index:number, array:Data[] ): any{
    return (value.status === "pending")
  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((data) =>  {
      const tempData = data as Data[];
      this.data = [tempData.filter(this.filterPending)[1]];
    })
  }
}
