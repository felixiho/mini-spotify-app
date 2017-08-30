import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private authToken: string = 'BQAFxm1JZY5Q_Hwkk1zn5qMyvc6InH2f1noU7FW5lFLr1P30nLZPCoqde9UYPARu87lnJloAJrGzKtTxjrBVmQ65mnpoqGdu15neRjXUV2IpDW4IDFuSUl2cd2S3WQ5U8waKrw';
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
