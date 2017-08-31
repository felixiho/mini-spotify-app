import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent  {
  searchStr: string;
  searchRes: Artist[];
  constructor(private _spotifyService:SpotifyService){
    if(window.location.hash.length > 0) {
      let hash = window.location.hash.split('=')[1].split('&');
      sessionStorage.setItem("spotifytoken", JSON.stringify(hash));
    }
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      },
      err => {
        this._spotifyService.getNewToken();
        console.log('Error ' + err.status + ' occurred:', err.statusText);
      }
    )
  }
}
