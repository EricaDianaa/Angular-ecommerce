import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prod, productor } from "../interface";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PreferitiService {
  url: string = "https://dummyjson.com/products/";
  arr: prod[] = [];
  constructor(private http: HttpClient) {}

  //arr
  addToPrefe(prod: prod) {
    const found = this.arr.find((prd) => prd.id === prod.id);
    if (!found) {
      this.arr.push(prod);
    }
  }

  removeFromFav(id: number) {
    const index = this.arr.findIndex((el) => el.id === id);
    this.arr.splice(index, 1);
  }

  get favList() {
    return new Observable((obs: Observer<prod[]>) => {
      obs.next(this.arr);
    });
  }

  isFav(id: number) {
    return this.arr.find((prd) => prd.id === id);
  }
}
