import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductDetails(productId) {
    //created postman mock server
    return this.http.get(`https://60c518b1-47dd-49ab-97e3-62beb0609f2f.mock.pstmn.io/productdetails?productid=${productId}`);
  }
}
