import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculasService } from 'src/app/core/services/peliculas/peliculas.service';
import { ResultadosPeliculas } from 'src/app/interface/pelicula.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pelicula: ResultadosPeliculas
  peliculaCartelera: ResultadosPeliculas[]

  constructor(private route: ActivatedRoute, private ps: PeliculasService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProducto(id)
    })

    this.ps.obtenerPopulares().subscribe(data => {
      this.peliculaCartelera = data.results
    })
  }

  fetchProducto(id){
    this.ps.obtenerPorId(id).subscribe(data => {
      this.pelicula = data
    })
  }

}
