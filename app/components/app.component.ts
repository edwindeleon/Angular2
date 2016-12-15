import {Component} from '@angular/core';
import {CartService} from '../services/cart.services'

@Component({
  selector : 'my-app',
  template: 
  `
  	<header>
  		Cursos
  	</header>
    <nav>
    <a routerLink="">Inicio</a>
    <a routerLink="courses">Cursos</a>
    </nav>
  	<section>
  		<router-outlet></router-outlet>

  	</section>
  `,
  providers : [CartService]
})

export class AppComponent{}