import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Data, fields } from '../types';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  dataSubscripion = new Subscription()
  data: Data[] = []
  isLoading = true
  error = false

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
    this.dataSubscripion = this.dataService.getData()
      .subscribe({
        next: (data) => {
          this.isLoading = true
          this.data = this.selectNthElement(data as Data[], "status", "pending", 2);
          this.isLoading = false
        },
        error: (err) =>{
          this.isLoading = false
          this.error = true
        }
      })
  }

  ngOnDestroy(): void {
      this.dataSubscripion.unsubscribe()
  }
}
