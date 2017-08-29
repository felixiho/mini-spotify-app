import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private authToken: string = 'BQBjItcVDaSjmuT0IXNzXvGUFwKW5McdqPU9mr6oAHoze5CMyvOVCRX8XqnF4UxD61G-0dLYiBh9YNfGh54jkMvSo4_C_UnESmq1QiWFVIeTa1XD7w0lFRUX8db8sHkyf2di729ibuQKIz-YR72t1pE7TIR2R8VVfCrN57oqNAn9igAyIPfBOYuVl1T2T47Iaf39zVY9OPMOtmWEuwIzBygxVdhoH2MJ0QRQD2ncsWO7WBfs9ig_gFDqCqZsMj0EJP13C5iK8tgWlUw0ejbgMY1qe3GG_OddGuBZBqizIe3-tm8oL9kBQn-kohT7';
    constructor(private _http:Http){

    }

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
