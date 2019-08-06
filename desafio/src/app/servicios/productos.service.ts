import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Form } from '../classes/interfa';



@Injectable({
  providedIn:'root'
})

export class ProductosService {
  apiUrl = 'https://api.myjson.com/bins/1byugl'

  productos: any[] = [];

  constructor(private _http:HttpClient) {  }
    
    getProductos(){
      return this._http.get<Form[]>(this.apiUrl);      
    }
        
}
