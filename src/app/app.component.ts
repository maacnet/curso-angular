import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'curso-angular';
  NomeUsuario = "MaacnetFilho";

  UserData = {
    Email: "Maacnet@gmail.com",
    Papel:   "Administrador",
  }

}
