import { Component } from '@angular/core';
import { Routes} from "@angular/router";
import {JSONPlaceholderService} from "../services/jsonplaceholder.service";
import {RouterModule} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {
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


  delete(id: number){

      return this.http.delete('https://jsonplaceholder.typicode.com/albums/' + id).subscribe(data=>{
        console.log(data);
        alert("succes");

      })





  }
  createFunction(){
    let name = prompt("enter name album:");

    alert("Created new data")
  }

  update(id: number){


  }

}
