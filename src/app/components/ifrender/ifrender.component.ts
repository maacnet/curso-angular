import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifrender',
  templateUrl: './ifrender.component.html',
  styleUrls: ['./ifrender.component.css']
})
export class IfrenderComponent implements OnInit {

  Mostrar: boolean = true;
  Usuario = "Administrador";


  constructor() { }

  ngOnInit(): void {
  }

}
