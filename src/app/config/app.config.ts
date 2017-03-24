import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    private conf = {
        api: {
            baseurl: "//localhost:8888"
        }
    };

    api(path) :string {
        return this.conf.api.baseurl + path;
    }
};
