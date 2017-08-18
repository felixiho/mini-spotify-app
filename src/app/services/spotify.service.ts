import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private authToken: string = 'BQD1L9nZdw-_CawsbljCJSj9uWtv-MiTKxjGMpyzX_SQzfZdZcQyg9aa0i32svg6Hm35duViu-ZdB7TDkmhuY2KYtiJsZLm4pBEDjwcgMnwZbNOxn98qCxAY5KoBIggkSP5rfzrqd0pKoRg6qJQk_WQUhJvIlqjOox870btM6TqMJNbGZL0qX17IsjEMVyOcJ2nkNdyavralS100AmkHp7BGJOAnad0hh5DQsSJagtbIGuF8TcnpHJ_HaHIr78l88f7wdTs9Hntx6K-0KAcX835q_GJZQ0QeS6VhqazwyAqKq1gli3qsNA1rVBgf';
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