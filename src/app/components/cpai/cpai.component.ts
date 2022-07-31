import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpai',
  templateUrl: './cpai.component.html',
  styleUrls: ['./cpai.component.css']
})
export class CpaiComponent implements OnInit {

  @Input() UserName: string = "MaacnetPai" ;

  @Input() DadosUsuario!: {Email: string , Papel: string }

  constructor() { }

  ngOnInit(): void {
  }

}
