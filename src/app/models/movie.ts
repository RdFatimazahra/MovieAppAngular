// src/app/models/movie.ts

export interface Movie {
    id: number;
    titre: string;
    dateSortie: string; // Assurez-vous que cette propriété existe et est correctement nommée
    genre: string;
    realisateur: string;
    note: number;
  }
  