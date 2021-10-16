import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {
  @Input() data;
  segment: string;
  sub = [];
  categories = [];

  constructor(
    public service:DataService
  ) { }

  ngOnInit(): void {

    this.segment = this.data.segment;
    this.sub = this.data.sub.split(',');
    this.categories = this.data.categories.split(',');
  }

  onsave(){
    this.service.addUpdate().subscribe(data => {
      console.log(data)
    });
  }
}
