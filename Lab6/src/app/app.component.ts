import { Component } from '@angular/core';
import { JSONPlaceholderService} from './services/jsonplaceholder.service';
import { RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab6';

  data: any;

  constructor(private JSONPlaceholder:JSONPlaceholderService) {}
  getDataFromApi(){
    this.JSONPlaceholder.getData().subscribe((Data) =>{
      console.log(Data);
      this.data = Data;
    })
  }

  ngOnInit(): void {
    this.JSONPlaceholder.getData().subscribe((data)=>{
      this.data = data;
    })
  }

}
