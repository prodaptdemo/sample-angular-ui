import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdminService {
  private baseUrl: string = 'https://prod-16.eastus2.logic.azure.com:443/workflows/96ec406a397640909448dca576d52afa/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=piQE62maEehNP8hjPmLAEUfGCkGX1GX0zx_gvTupybs';
  //private headers:Headers =new Headers();
  public managementAccessToken: string;

  constructor(private http : Http) { }

    public createCluster(clusterVal){
       let headers:Headers =new Headers();
       headers.append('Content-Type', 'application/json');
       let body = JSON.stringify(clusterVal);
       console.log(body);
    return this.http.post(this.baseUrl, body, {headers:headers}).map((res: Response) => res.json());
   }

   public getDropDownValues(){
     let data={};
     let body=JSON.stringify(data);
     let url = "https://prod-04.eastus2.logic.azure.com:443/workflows/d1279f6aa6c649a58f85d66b8216911b/triggers/request/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=8YNQVEDVE-1yA1_8DxZyCM9rZ_XZwWK0DHzfdDRbcu8";
     return this.http.post(url,{body}).map((res: Response) => res.json());
   }
}
