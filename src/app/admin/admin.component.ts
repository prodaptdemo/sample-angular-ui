import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TweenMax } from "gsap";
import { AdminService } from "app/admin/admin.service";
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   
    constructor(private adminService: AdminService) {}
    ngOnInit() {

    }
   
    createCluster(value: any, form) {
        alert("called");
        let response = this.adminService.createCluster(value).subscribe(data => {
            return data;
        }, error => {
            console.error("Error Creating cluster!");
            return Observable.throw(error);
        });
    }
    
}
