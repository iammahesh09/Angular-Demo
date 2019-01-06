import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  _movie: any = {};
  movies;
  isError = "Nor"
  isNotFound: any;
  isSearchId: boolean = true; movieId: Object;
  ;
  isMovieSearch: boolean = true;;

  constructor(private _movieService: MovieService) { }

  searchMovie() {
    this.isMovieSearch = false;
    this.isSearchId = true;
    console.log(this._movie)
    this._movieService.searchMovieTitle(this._movie.Title, this._movie.Type).subscribe(
      //res => console.log(res),
      res => {
        this.movies = res['Search'];
        this.isNotFound = res['Error'];
      },
      err => console.log(err)
    )
  }

  getMovie(movie) {
    this.isMovieSearch = true;
    this.isSearchId = false;
    console.log(movie)
    this._movieService.searchMovieId(movie).subscribe(
      res => this.movieId = res,
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

}
