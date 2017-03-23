import { Injectable } from '@angular/core';

@Injectable()
export class HatchMetaConfig {
    private config: Object = {};

    constructor() {}

    get(key: any) {
        return this.config[key];
    }

    keys() {
        return Object.keys(this.config);
    }
}