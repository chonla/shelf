import { Injectable } from '@angular/core';

@Injectable()
export class HatchMetaConfig {
    private autofields:string[] = ["id","created_time","updated_time"];
    private config: Object = {};

    constructor() {}

    all(key: any) {
        return this.config[key];
    }

    get(key: any) {
        let meta = this.config[key];
        let pri = this.autofields;
        if (meta.attributes && meta.attributes.private) {
            pri.push.apply(pri, meta.attributes.private);
        }
        if (pri.length > 0) {
            meta.fields = meta.fields.filter((o) => {
                return pri.indexOf(o.name) === -1;
            })
        }
        return meta;
    }

    keys() {
        return Object.keys(this.config);
    }

    fields(key: any) {
        let meta = this.get(key);
        return meta.fields;
    }
}