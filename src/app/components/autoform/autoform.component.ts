import { Component } from '@angular/core';
import { HatchMetaConfig } from '../../config/hatchmeta.config';

@Component({
    selector: 'autoform',
    templateUrl: './autoform.component.html'
})
export class AutoFormComponent {
    private fields: Object;
    private form: Object;

    constructor(private config: HatchMetaConfig) {
        this.form = config.get('properties');
    }
}
