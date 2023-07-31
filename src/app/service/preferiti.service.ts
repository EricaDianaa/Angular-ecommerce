import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { productor } from "../interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PreferitiService {
  url: string = "https://dummyjson.com/products/";
  arr: productor[] = [];
  constructor(private http: HttpClient) {}

  //CHIAMATA HTTP GET
  get(id: number): Observable<productor> {
    return this.http.get<productor>(this.url + id);
  }
}
