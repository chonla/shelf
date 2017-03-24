import { Injectable } from '@angular/core';

@Injectable()
export class HatchMetaConfig {
    private autofields:string[] = ["id","created_time","updated_time"];
    private config: Object = {
    "users": {
        "attributes": {
            "private": [
                "password"
            ]
        },
        "fields": [
            {
                "name": "id",
                "type": "auto"
            },
            {
                "name": "login",
                "type": "short_text"
            },
            {
                "name": "password",
                "type": "password"
            },
            {
                "name": "created_time",
                "type": "datetime"
            },
            {
                "name": "updated_time",
                "type": "datetime"
            }
        ]
    },
    "properties": {
        "attributes": {
            "private": [
                "note",
                "photos"
            ]
        },
        "fields": [
            {
                "name": "id",
                "type": "auto"
            },
            {
                "name": "title",
                "type": "short_text"
            },
            {
                "name": "detail",
                "type": "long_text"
            },
            {
                "name": "price",
                "type": "int"
            },
            {
                "name": "size",
                "type": "int"
            },
            {
                "name": "size_unit",
                "type": "very_short_text"
            },
            {
                "name": "bedroom_no",
                "type": "int"
            },
            {
                "name": "toilet_no",
                "type": "int"
            },
            {
                "name": "note",
                "type": "long_text"
            },
            {
                "name": "photos",
                "type": "files"
            },
            {
                "name": "tags",
                "type": "tags"
            },
            {
                "name": "created_time",
                "type": "datetime"
            },
            {
                "name": "updated_time",
                "type": "datetime"
            }
        ]
    }
};
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