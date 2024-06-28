import { Component, OnInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
// import { MovieService } from './Services/movie.service';
import { Movie } from './models/movie';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

// interface Movie {
//   id: number;
//   titre: string;
//   dateSortie: string;
//   genre: string;
//   realisateur: string;
//   note: number;
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor], // Ajoutez NgFor ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first-app';
  movies: Movie[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    
    this.httpClient.get<Movie[]>("http://localhost:8082/api/movies").subscribe(response => {
      this.movies = response;
      console.log(this.movies);
    },error =>{
      console.log("eroor");
    }
  );
  }
}
