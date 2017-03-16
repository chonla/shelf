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
    private hasDate: boolean;
    private hasTime: boolean;

    constructor() {
        this.id = 'ng2_datetime_input_' + Math.random().toString(36).substring(7);
        this.hasDate = this.formatHasDate();
        this.hasTime = this.formatHasTime();
    }

    formatHasDate() : boolean {
        return /[DMY]/.test(this.format);
    }

    formatHasTime() : boolean {
        return /[Hms]/.test(this.format);
    }

    ngAfterViewInit() {
        $(this.el.nativeElement)
            .datetimepicker({
                format: this.format,
            });
    }
}
