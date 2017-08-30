import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'albums',
  templateUrl: 'albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums:Album[];
  constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute){ }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          })
      })
  }
}
