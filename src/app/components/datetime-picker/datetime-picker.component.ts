import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any

@Component({
    selector: 'datetime-picker',
    templateUrl: './datetime-picker.component.html'
})
export class DatetimePickerComponent implements AfterViewInit {
    @ViewChild('dateTimeInput') el:ElementRef;
    @Input() name: string;
    @Input() format: string;

    private id: string;

    constructor() {
        this.id = 'ng2_datetime_input_' + Math.random().toString(36).substring(7);
    }

    hasDate() : boolean {
        return /[DMY]/.test(this.format);
    }

    hasTime() : boolean {
        return /[Hms]/.test(this.format);
    }

    ngAfterViewInit() {
        $(this.el.nativeElement)
            .datetimepicker({
                format: this.format,
                sideBySide: true
            });
    }
}
