import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../types';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor() { }

  @Input() data: Data = {
    id: 0,
    user_id: 0, 
    title:"",
    due_on: "",
    status:""
  }

  ngOnInit(): void {
  }

}
