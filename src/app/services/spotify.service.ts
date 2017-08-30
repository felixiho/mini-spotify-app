import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private authToken: string = 'BQBQU72daY2z7krPJBi8KnN-Vj3HLkLnOFLMty6EeHdOfZ28iMWsUJ-1jFe7Aa6W5xG5epjWmyLjrXqmcFTdjB8jqh02c2ySy0CLQ_XBtwgzI8na9XsDrmvsXUcwO9fkjmon-Q';
  constructor(private _http:Http){ }

  searchMusic(str:string, type='artist'){
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl, { headers })
      .map(res => res.json());
  }

  getArtist(id:string){
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistUrl, { headers })
      .map(res => res.json());
  }

  getAlbums(artistId:string){
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.albumUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._http.get(this.albumUrl, { headers })
      .map(res => res.json());
  }
}
