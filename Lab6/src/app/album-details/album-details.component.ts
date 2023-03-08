import { Component } from '@angular/core';
import { RouterModule} from "@angular/router";
import { JSONPlaceholderService} from "../services/jsonplaceholder.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  data: any;



  constructor(private JSONPlaceholder:JSONPlaceholderService, private http:HttpClient) {

  }



  getData(): void{
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe((result:any)=> {
      this.data = result;
    })
  }
  ngOnInit(): void {
    debugger;
    this.getData();
  }

  showPhotos(){

  }
}
