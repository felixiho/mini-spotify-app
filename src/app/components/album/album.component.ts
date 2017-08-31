import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
})
export class AlbumComponent  {
  id: string;
  album: Album[];
  constructor(
    private location:Location,
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute){ }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

  cancel() {
    this.location.back(); // <-- go back to previous location
  }
}
