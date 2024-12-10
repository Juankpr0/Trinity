import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./contenedor/header/header.component";
import { CuerpoComponent } from './contenedor/cuerpo/cuerpo.component';
import { FooterComponent } from "./contenedor/footer/footer.component";
import { CategoriasComponent } from './categorias/categorias.component'; 
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'TRINITY';
}
