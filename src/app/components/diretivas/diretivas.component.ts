import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  tamanho = 30;
  fonte = "Arial";
  cor = "Blue";

  classes = ["titulo-verde","titulo-pequeno"];

  underline = "titulo-sublinhado";

  constructor() { }

  ngOnInit(): void {
  }

}
