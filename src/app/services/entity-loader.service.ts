import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AppConfig } from '../config/app.config';
import { HatchMetaConfig } from '../config/hatchmeta.config';

@Injectable()
export class EntityLoaderService {

  constructor(private http: Http, private conf:AppConfig, private meta:HatchMetaConfig) {}

  getFields(entity:string) {
    return this.meta.fields(entity);
  }

  get(entity:string) {
        return this.http.get(this.conf.api('/' + entity))
            .map(res => res.json())
            .catch(err => {
                console.log(err);
                return Observable.throw(err.message);
            });
  }

}
