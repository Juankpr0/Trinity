import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';
import { SalidasComponent } from './salidas/salidas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AlertasComponent } from './alertas/alertas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'categorias', component: CategoriasComponent }, 
    { path: 'subcategorias', component: SubcategoriasComponent }, 
    { path: 'salidas', component: SalidasComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'devoluciones', component: DevolucionesComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'alertas', component: AlertasComponent },

];
