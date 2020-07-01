import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent implements OnInit {

  constructor(private productService: ProductService) { }
  details: any;
  ngOnInit() {
    this.productService.getProductDetails(12345).subscribe(response => {
      this.details = response;
      console.log(this.details);
    }, err => {
      console.log('failed to get product details');
    });
  }

}
