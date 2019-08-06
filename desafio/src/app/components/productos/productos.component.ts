import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Form } from '../../classes/interfa';
import {Router} from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
  })
  export class ProductosComponent implements OnInit {
    
    productos: Form[];

    constructor(private PRODUCTOSSERVICIOS:ProductosService,
                private router: Router){}
   
  ngOnInit() { 
  
    return this.PRODUCTOSSERVICIOS.getProductos()
     .subscribe( data => this.productos = data);
   
  
  }
  verProducto(idx: number) {
    this.router.navigate(['/producto', idx]);
    console.log(idx);
  }


}




