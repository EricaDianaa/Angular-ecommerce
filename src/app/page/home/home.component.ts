import { Component } from "@angular/core";
import { productor } from "src/app/interface";
import { CreateService } from "src/app/service/create.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  products!: productor["products"];
  constructor(private prdSrv: CreateService) {}

  ngOnInit(): void {
    this.prdSrv
      .getProducts()
      .subscribe(({ products }: productor) => (this.products = products));
  }
}
