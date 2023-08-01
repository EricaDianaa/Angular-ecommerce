import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cutText",
})
export class PipesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(0, 40) + "...";
  }
}
