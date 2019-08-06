import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Form } from '@angular/forms';
import {router, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
    productos: Form[];

    constructor(private PRODUCTOSSERVICIOS:ProductosService,
                private router: Router){}
   
  ngOnInit() { 
    return this.PRODUCTOSSERVICIOS.getProductos()
     .subscribe(data => this.productos = data);
   
    

  }
  verproducto(idx: number){
    this.router.navigate(['/producto',idx]);
    console.log(idx);
  }


}
