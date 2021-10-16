import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';

export interface listData{
  id: number,
  segment:string,
  sub:string,
  categories:string
}

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {
  @Output() addUpdateEvent = new EventEmitter<any>();

  displayedColumns:string[] = ['id','segment','sub','categories'];
  table_data = [];
  list_data: listData[] = [];
  dataSource = new MatTableDataSource<listData>(this.list_data);
  id_selected:number;

  constructor(
    public service:DataService
  ) { }

  ngOnInit(): void {
    console.log("hallo");
    this.list_data = [];
    this.service.listData().subscribe(data => {
      let table_data = data['data'];
      table_data.forEach(element => {
        let segemnt_types = [];
        element['segmentTypeLites'].forEach(element => {
          segemnt_types.push(element['name']);
        });
        let categories = [];
        element['consumerCategoryLites'].forEach(element => {
          categories.push(element['name']);
        });
        let obj = {
          id : element['id'],
          segment: element['name'],
          sub : segemnt_types.join(','),
          categories: categories.join(',')
        };
        this.list_data.push(obj);
      });
      this.dataSource.data = this.list_data as listData[];
    });
  }

  addUpdate(){
    console.log(this.id_selected , this.list_data.filter( o => o.id == this.id_selected));
    let val = {
      segment: this.list_data.filter( o => o.id == this.id_selected)[0]['segment'],
      sub: this.list_data.filter( o => o.id == this.id_selected)[0]['sub'],
      categories: this.list_data.filter( o => o.id == this.id_selected)[0]['categories']
    }
    console.log(val)
    this.addUpdateEvent.emit(val);
    // this.service.fetchSegment(this.id_selected).subscribe(data => {
    //   console.log(data)
    // })
  }

  selectId(e,id){
    if(e.checked == true){
      this.id_selected = id;
    }
    console.log(e,id)
  }
}
