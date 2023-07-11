import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'mi-nuevo-proyecto-angular';
  result: number = 0;
  pantalla: string = "";

  numero(number: number): void {
    // Lógica para manejar el número seleccionado
    console.log("Número seleccionado:", number);
    this.pantalla += number;
  }

  operador(operador: string) {
    // Lógica para manejar los operadores
    console.log("Operador seleccionado:", operador);
    this.pantalla += operador;
  }

  suma() {
    let numeros = this.pantalla.split('+');
    let resultado = parseFloat(numeros[0]) + parseFloat(numeros[1]);
    this.pantalla = resultado.toString();
  }

  resta() {
    // console.log(contenido)
    let numeros = this.pantalla.split('-');
    // console.log(numeros)
    let resultado = parseFloat(numeros[0]) - parseFloat(numeros[1]);
    // console.log(resultado)
    this.pantalla = resultado.toString();
  }

  multiplicacion() {
    let numeros = this.pantalla.split('*');
    let resultado = parseFloat(numeros[0]) * parseFloat(numeros[1]);
    this.pantalla = resultado.toString();
  }

  division() {
    let numeros = this.pantalla.split('/');
    let resultado = parseFloat(numeros[0]) / parseFloat(numeros[1]);
    this.pantalla = resultado.toString();
  }

  calcular() {
    // Lógica para hacer los cálculos
    if (this.pantalla.includes('+')) {
      this.suma();
    }
    if (this.pantalla.includes('-')) {
      // console.log(this.pantalla);
      this.resta();
    }
    if (this.pantalla.includes('*')) {
      this.multiplicacion();
    }
    if (this.pantalla.includes('/')) {
      this.division();
    }
  }

  borrar() {
    this.pantalla = "";
  }
}