import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private authToken: string = 'BQCDQBumK3vm67y-Swfk9qQqq2rqCbOY8Rc4OCLTqOuoYX2FtUNruQ9ab21X5bSKjGroMcZNTwd5v9J4FKimpiFbpfZ_YPtemkNnNgAnyhVmD-KKOu4Q1q9pktOgRuYFpRSPbuLJPu-1ITiFKL7Roh9sn_iEr5IJ-rCjkyrS71DBh4fxwQdXXU8m8xb4H_vkuA71FYhzRoswHonZh5Hc55zdjMgGbGx1EbjvRAqfi5D8ttnzBoeyaAslrfHzpWfaynbx7ulQT94JVPwNEgsfUiw3YKFlWjxLpmJCBMFZG_TaPhK_dE2SgaciQPdH';
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
