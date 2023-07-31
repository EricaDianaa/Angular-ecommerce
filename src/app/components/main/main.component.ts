import { prod } from "./../../interface";
import { Component, Input, OnInit } from "@angular/core";
import { CreateService } from "src/app/service/create.service";
import { productor } from "src/app/interface";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  @Input() src!: string;
  product: prod[] = [];
  arr: prod[] = [];
  constructor(private privateSvc: CreateService) {}

  ngOnInit() {
    this.privateSvc.getAll().subscribe((res: productor) => {
      this.product = res.products;
      console.log(res);
    });
  }

  // generate(id: number) {
  //   this.privateSvc.get(id).subscribe((res: productor) => {
  //     this.arr = res.products;
  //     console.log(res);
  //   });

  // elimina(id: number) {
  //   console.log("click");
  //   this.privateSvc.delete(id).subscribe((res: productor) => {
  //     this.product = res.products;
  //     console.log(res);
  //   });
  // }
  // }
}
