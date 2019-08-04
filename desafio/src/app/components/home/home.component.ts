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

    this.http.get('https://api.myjson.com/bins/1byugl')
      .subscribe((resp:any) =>{
        this.productos = resp;
        console.log(resp);
      });
   }



  ngOnInit() {
    
    


  }


 
}
