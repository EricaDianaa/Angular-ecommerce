import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { prod, productor } from "../interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CreateService {
  url: string = "https://dummyjson.com/products";
  product: productor[] = [];
  favs: prod[] = [];
  constructor(private http: HttpClient) {}

  //CHIAMATA HTTP GET
  getAll(): Observable<productor> {
    return this.http.get<productor>(this.url);
  }

  //CHIAMATA HTTP DELETE
  delete(id: number): Observable<productor> {
    return this.http.delete<productor>(this.url + "/" + id);
  }
  //CHIAMATA HTTP GET
  get(id: number): Observable<productor> {
    return this.http.get<productor>(this.url + id);
  }

  getProducts() {
    return this.http.get<productor>(this.url);
  }

  addToPrefe(prod: prod) {
    const found = this.favs.find((prd) => prd.id === prod.id);
    if (!found) {
      this.favs.push(prod);
    }
  }

  removeFromFav(id: number) {
    const index = this.favs.findIndex((el) => el.id === id);
    this.favs.splice(index, 1);
  }

  get favList() {
    return new Observable((obs: Observer<prod[]>) => {
      obs.next(this.favs);
    });
  }

  isFav(id: number) {
    return this.favs.find((prd) => prd.id === id);
  }
}
