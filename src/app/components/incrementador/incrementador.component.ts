import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  //En caso que desde el componente padre exista un propiedad con mismo valor que en el 
  //hijo se puede mandar con otro nombre
  //@Input('valor') progreso: number = 70;
  @Input() progreso: number = 70;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  get getProcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor( valor: number) {
    this.progreso += valor; 

    if( this.progreso >= 100 && valor >= 0 ) {
      this.progreso = 100;
    } else if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
    }

    this.valorSalida.emit(this.progreso);
    return this.progreso;
  }

  onChange( nuevoValor: number ) {

    if ( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

  
}
