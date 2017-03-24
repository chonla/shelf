import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fieldToLabel'})
export class FieldToLabelPipe implements PipeTransform {
    transform(value: string): string {
        if (value.toLowerCase() === "id") {
            return "ID";
        }
        return value.split("_").map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }).join(" ");
    }
}