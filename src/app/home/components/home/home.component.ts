import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/core/services/peliculas/peliculas.service';
import { ResultadosPeliculas } from 'src/app/interface/pelicula.interface';
import { take, map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pelicula: ResultadosPeliculas[]

  constructor(private ps: PeliculasService) { }

  ngOnInit() {
    this.fetch()
  }

  fetch() {
    this.ps.obtenerTodasPeliculas().pipe(
      map((data) => {
        return data.results.slice(0, 6)
      })
    ).subscribe(pelicula => {
        this.pelicula = pelicula
      })
  }
}
