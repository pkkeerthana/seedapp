import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seedapp';
  show_list : boolean = true;
  update_data:any;

  toggleComponent(e){
    this.show_list = false;
    console.log(e)
    this.update_data = e;
  }
}
