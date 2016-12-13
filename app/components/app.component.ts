import {Component} from '@angular/core';
import {CartService} from '../services/cart.services'

@Component({
  selector : 'my-app',
  template: 
  `
  	<header>
  		Cursos
  	</header>
  	<section>
  		<courses></courses>
  		<cart></cart>

  	</section>
  `,
  providers : [CartService]
})

export class AppComponent{}