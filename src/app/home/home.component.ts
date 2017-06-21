import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "app/header/header.component";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  public isSelected;
  constructor(private headerComp:HeaderComponent,
  private router: Router) { }
  ngOnInit() {}
  showDashBoard(event){
    console.log(event.target.id);
    if(event.target.id == 'azure'){
      this.isSelected = true;
      this.router.navigate(['./admin']);
    }else{
      this.isSelected = false;
    }
     this.headerComp.enableNavBars(this.isSelected);
  }


  
}
