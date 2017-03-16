import { Component, Input } from '@angular/core';
declare var $: any

@Component({
    selector: 'tags-input',
    templateUrl: './tags-input.component.html'
})
export class TagsInputComponent {
    @Input() name: string;

    constructor() {
    }
}
