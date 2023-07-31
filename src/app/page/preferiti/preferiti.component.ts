import { Component, Input } from "@angular/core";
import { prod, productor } from "src/app/interface";
import { PreferitiService } from "src/app/service/preferiti.service";

@Component({
  selector: "app-preferiti",
  templateUrl: "./preferiti.component.html",
  styleUrls: ["./preferiti.component.scss"],
})
export class PreferitiComponent {
  @Input() src!: string;
  product: prod[] = [];
  arr!: prod[];
  constructor(private privateSvc: PreferitiService) {}

  // generate(id: number) {
  //   this.privateSvc.get(id).subscribe((res: productor) => {
  //     this.arr = res.products;
  //     console.log(res);
  //   });
  // }
}
