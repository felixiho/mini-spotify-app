import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  public baseUrl= 'https://accounts.spotify.com/authorize/?client_id=';
  public clientId = '4f8a6fec4c8142bf92f47e2a64b9ae8a';
  public responseType= '&response_type=token';
  public redirectUrl= '&redirect_uri=http://localhost:3000';
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private authToken: string = 'BQBlOsGX_bYwna8S80bQ3NYAnuCXKysmJtzzmC_ot1qyXKpC3TYlCzmrKleAKwRPMnqOkMMro7r0q7ZgUQvNdwZB8SdrIfpsU0jid9SUXOVXJoukszOPmos-jcZtcjyDuX8rbw';
  constructor(private _http:Http){ }

  searchMusic(str:string, type='artist'){
    const options = this.getOptions();
    this.searchUrl = `https://api.spotify.com/v1/search?q=${str}&offset=0&limit=20&type=${type}&market=US`;
    return this._http.get(this.searchUrl, options)
      .map(res => res.json());
  }

  getArtist(id:string){
    const options = this.getOptions();
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    return this._http.get(this.artistUrl, options)
      .map(res => res.json());
  }

  getAlbums(artistId:string){
    const options = this.getOptions();
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._http.get(this.albumsUrl, options)
      .map(res => res.json());
  }

  getAlbum(id:string){
    const options = this.getOptions();
    this.albumUrl = `https://api.spotify.com/v1/albums/${id}`;
    return this._http.get(this.albumUrl, options)
      .map(res => res.json());
  }

  getNewToken() {
    window.location.href = this.baseUrl + this.clientId + this.responseType + this.redirectUrl;
  }

  getTokenFromStorage(){
    let newToken = JSON.parse(sessionStorage.getItem('spotifytoken')) || {};
    return newToken;
  }

  private getOptions() {
    let header = new Headers();
    header.append('Authorization', `Bearer ${this.getTokenFromStorage()}`);
    let options = new RequestOptions({ headers: header });
    return options;
  }
}
