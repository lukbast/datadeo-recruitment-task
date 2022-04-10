import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Data, fields } from '../types';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: Data[] = []
  isLoading = true

  constructor(private dataService: DataService) {
    
  }

  private selectNthElement (data: Data[], fieldName:fields, fieldValue: any, n: number): Data[] {
      let count = 0;
      for (let entry of data){
        if (entry[fieldName] === fieldValue){
          count += 1;
        }
        if (count === n){
          return [entry]
        }
      }
      // Code was able to reach this point, that means there's no such element.
      // Empty list will be return so empty results can be displayed.
      return []
  }


  ngOnInit(): void {
    this.isLoading = true
    this.dataService.getData()
      .subscribe((data) =>  {
      this.data = this.selectNthElement(data as Data[], "status", "pending", 2);
      this.isLoading = false
    })
  }
}
