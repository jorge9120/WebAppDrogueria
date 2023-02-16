import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  private ApiUrl = "http://localhost:8080/api"; // URL to web api
  constructor(private http: HttpClient) { }
  
  public getMedicamentos(): Observable<any> {
    return this.http.get<any>(this.ApiUrl+"/medicamentos");
  }

  public deleteItem(id: number): Observable<any> {
    return this.http.delete(this.ApiUrl +"/medicamentos/eliminar/"+ id);
  }

  public addItem(data: any): Observable<any> {
    return this.http.post(this.ApiUrl+"/medicamentos", data);
   }

   public addVenta(data: any): Observable<any> {
    return this.http.post(this.ApiUrl+"/ventas/", data);
   }


}
