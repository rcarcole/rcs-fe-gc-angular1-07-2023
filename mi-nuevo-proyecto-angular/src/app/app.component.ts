import { Component } from '@angular/core';
import * as math from 'mathjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'mi-nuevo-proyecto-angular';
  //  El '!:' significa que la variable puede ser nula en un principio, pero se le asignará un valor en algún momento antes de ser utilizada.
  result!: number; 
  pantalla = document.querySelector('#pantalla');

  numero(number: number): void {
    // Lógica para manejar el número seleccionado
    console.log("Número seleccionado:", number);

  }

  operador(operador: string) {
    // Lógica para manejar los operadores
    console.log("Operador seleccionado:", operador);
  }

  calcular() {
    // Lógica para hacer los cálculos
    try {
      this.result = math.evaluate(this.result.toString());
    } catch (error) {
      console.error("Error en el cálculo:", error);
    }
  }

  borrar() {
    this.result = 0;
  }
}


