import { prod } from "./../../interface";
import { Component, Input } from "@angular/core";
import { CreateService } from "src/app/create.service";
import { productor } from "src/app/interface";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  @Input() src!: string;
  product: prod[] = [];
  constructor(private privateSvc: CreateService) {}

  ngOnInit() {
    this.privateSvc.getAll().subscribe((res: productor) => {
      this.product = res.products;
      console.log(res);
    });
  }
}
