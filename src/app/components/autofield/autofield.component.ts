import { Component, Input } from '@angular/core';
import { HatchMetaConfig } from '../../config/hatchmeta.config';

@Component({
    selector: 'autofield',
    templateUrl: './autofield.component.html'
})
export class AutoFieldComponent {
    @Input() field: Object;
    
    constructor(private config: HatchMetaConfig) {
    }
}
