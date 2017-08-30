import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private authToken: string = 'BQAU7snnv7It3RvBphulGX9TZEu-soJTc7FKM5Q5B5tZ0OdxtdjBZp1FQSF52IRE2DXKhk8FUlzdEbWiY3lR2_Lwhfhd3t9D_g7HU42REKt2lL3ZaK4bbxPdQa4FZAcBxlk5XQ';
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
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._http.get(this.albumsUrl, { headers })
      .map(res => res.json());
  }

  getAlbum(id:string){
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
    return this._http.get(this.albumUrl, { headers })
      .map(res => res.json());
  }
}
