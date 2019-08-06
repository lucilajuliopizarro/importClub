import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { Form } from 'src/app/classes/interfa';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  productos: Form[];

  constructor(private activetedRoute: ActivatedRoute,
              private productosService: ProductosService) {
                
                
                  this.activetedRoute.params.subscribe( params => {
                  this.productos = this.productosService.getProduct( params ['id']);
                });
               }

}
