import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { AlbumListComponent } from './album-list/album-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import {RouterModule, Routes} from "@angular/router";
import { AlbumDetailsComponent } from './album-details/album-details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'album-details/:album-detailsId', component: AlbumDetailsComponent},
  { path: 'album-list', component: AlbumListComponent},
  { path: 'album-details/:album-photos', component: PhotosComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumListComponent,
    HomeComponent,
    AboutComponent,
    PhotosComponent,
    AlbumDetailsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
