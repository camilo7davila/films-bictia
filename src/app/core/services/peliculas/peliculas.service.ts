import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula, ResultadosPeliculas } from 'src/app/interface/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  
  obtenerTodasPeliculas(): Observable<Pelicula>{
    return this.http.get<Pelicula>('https://api.themoviedb.org/3/movie/now_playing?api_key=ef736aff6e66446c750e094e19dff8ef&language=es');
  }

  obtenerPorBusqueda(nombre): Observable<Pelicula>{
    return this.http.get<Pelicula>(`https://api.themoviedb.org/3/search/movie?api_key=ef736aff6e66446c750e094e19dff8ef&language=es&query=${nombre}`)
  }

  obtenerPorId(id):Observable<ResultadosPeliculas>{
    return this.http.get<ResultadosPeliculas>(`https://api.themoviedb.org/3/movie/${id}?api_key=ef736aff6e66446c750e094e19dff8ef&language=es`)
  }

  obtenerPopulares():Observable<Pelicula>{
    return this.http.get<Pelicula>('https://api.themoviedb.org/3/movie/top_rated?api_key=ef736aff6e66446c750e094e19dff8ef&language=es&page=1')
  }

}
