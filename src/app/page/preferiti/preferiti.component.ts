import { Component, Input, OnInit } from "@angular/core";
import { prod, productor } from "src/app/interface";
import { CreateService } from "src/app/service/create.service";
import { PreferitiService } from "src/app/service/preferiti.service";

@Component({
  selector: "app-preferiti",
  templateUrl: "./preferiti.component.html",
  styleUrls: ["./preferiti.component.scss"],
})
export class PreferitiComponent implements OnInit {
  @Input() src!: string;
  product: prod[] = [];
  favs!: prod[];
  constructor(private privateSvc: CreateService) {}

  ngOnInit(): void {
    this.privateSvc.favList.subscribe((fav: prod[]) => {
      this.favs = fav;
      console.log(this.favs);
    });
  }
  removeFromFav(id: number) {
    this.privateSvc.removeFromFav(id);
  }
}
