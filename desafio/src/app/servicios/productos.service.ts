import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ProductosService {

    constructor(private http: HttpClient){


      this.http.get('https://testapi.io/api/hilderh//product/all')
      .subscribe(prod => {
        console.log(prod);
      })

    }
 
    
    
        


}
