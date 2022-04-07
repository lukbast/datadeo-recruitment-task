import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    TableComponent,
    RowComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    RowComponent
  ]
})
export class SharedModule { }
