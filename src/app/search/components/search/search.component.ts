import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/core/services/peliculas/peliculas.service';
import { Pelicula, ResultadosPeliculas } from 'src/app/interface/pelicula.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  nombrePelicula: string = ''
  peliculas: ResultadosPeliculas[]


  constructor(private ps: PeliculasService) {

  }

  ngOnInit() {
    this.ps.obtenerTodasPeliculas().subscribe(data => {
      this.peliculas = data.results
      console.log(this.peliculas);
    })
  }


  buscar() {
    this.peliculas = []
    this.ps.obtenerPorBusqueda(this.nombrePelicula).subscribe((data) => {
      this.peliculas = data.results
    })
  }
}
