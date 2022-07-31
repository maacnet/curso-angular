import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

name: string = "Marco";
age: number = 41;
job = "Programador"
hobbie = ["Nadar","Correr","Futebol"];

carro =
{

name: "Spin",
cor: "Preta",
ano: "2015"

}

  constructor() { }

  ngOnInit(): void {
  }

}
