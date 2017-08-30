import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private authToken: string = 'BQBVTyGlqEGBM6yXnpcuvwkspbjYwnkhLTscjdrgFP7SSaY3jindMpiPC1cW2hMOE_8Tc_97boVVeoBEkk3JflywtBkP7qffOPrViAxUmVeRAe4OalZnrqlQxliUlak9BZitT35DLP771m1SGCEudhV897IhXxWa_6Kmf1-IGSIOZqpdYbv2FM3kGnNHwCNchbGyes3rxyGn0vPM2POfPJlRXOOynxfAZMLuYxS3ssYLb8Bft9ecTI5jCIoJhO9bxeHHirSmkB-RXLp9CCmeuBvSCOhpbTwoTnEGdst5MdiH8NCOZoVWbn34WBzO';
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
}
