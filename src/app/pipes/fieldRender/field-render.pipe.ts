import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fieldRender'
})
export class FieldRenderPipe implements PipeTransform {
  private renderMap: Object;
  private maxTextLength: number = 60;

  constructor() {
    this.renderMap = {
      "int": "render_number",
      "datetime": "render_datetime",
      "time": "render_time",
      "date": "render_date",
      "long_text": "render_long_text",
      "very_long_text": "render_long_text",
      "tags": "render_tags",
      "password": "render_password"
    };
  }

  transform(value: any, type: any): any {
    if (this.renderMap.hasOwnProperty(type)) {
      return this[this.renderMap[type]](value);
    }
    return value;
  }

  render_datetime(value: any) {
    return moment(value).format("D/M/YYYY H:mm:ss");
  }

  render_time(value: any) {
    return moment(value).format("H:mm:ss");
  }

  render_date(value: any) {
    return moment(value).format("D/M/YYYY");
  }

  render_long_text(value: any) {
    if (value === undefined) {
      return value;
    }
    if (value.toString().length > this.maxTextLength) {
      return value.toString().substr(0, this.maxTextLength - 3) + "...";
    }
    return value
  }

  render_number(value: any) {
    if (value === undefined) {
      return value;
    }
    var parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render_tags(value: any) {
    if (value === undefined) {
      return value;
    }
    return value.toString().split(",").join(", ");
  }

  render_password(value: any) {
    return "●●●●●●●●●●●●";
  }

}
