import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any[]=[];

  constructor(private http:HttpClient ) {

    console.log('Constructor del Home hechos');
    this.http.get('https://testapi.io/api/hilderh//product/all')
      .subscribe((resp:any) =>{
        this.productos = resp;
        console.log(resp);
      });
   }



  ngOnInit() {
    
    


  }


 
}
