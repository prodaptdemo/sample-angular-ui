import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

  enableNavBars(value){
    if(value){
       $("#clusterEnable1,#clusterEnable2,#clusterEnable3").show();
    }else{
      $("#clusterEnable1,#clusterEnable2,#clusterEnable3").hide();
    }
   
  }

}
