import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumsComponent } from './components/albums/albums.component';

export const ROUTES: Routes = [
  { path: '', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: 'artist/:id', component: ArtistComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
