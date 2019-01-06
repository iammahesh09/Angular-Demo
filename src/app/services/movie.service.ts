import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  searchMovieTitle(title: string, type: string) {
    return this._http.get('http://www.omdbapi.com/?s=' + title + '&type=' + type + '&apikey=72540e98')
  }

  searchMovieId(imdbID: string) {
    return this._http.get('http://www.omdbapi.com/?i=' + imdbID + '&apikey=72540e98')
  }

}
