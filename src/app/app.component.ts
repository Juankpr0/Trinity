import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./contenedor/header/header.component";
import { CuerpoComponent } from './contenedor/cuerpo/cuerpo.component';
import { FooterComponent } from "./contenedor/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CuerpoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'TRINITY';
}
