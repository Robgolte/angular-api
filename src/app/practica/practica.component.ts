import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], //NO i,portar HttpClient porque esrta en el app.config.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

public datos:any[]=[]; //guardar los datos que se obtienen del servicio
constructor(private servicio:ServiciopracticaService){ }// inyectar la dependencia
ngOnInit():void{
  this.servicio.getDatos().subscribe(
    (datos)=>{
      this.datos=datos;
    });
}
}
