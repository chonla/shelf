import { Injectable } from '@angular/core';

@Injectable()
export class HatchMetaConfig {
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
                "note"
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

    get(key: any) {
        return this.config[key];
    }
}