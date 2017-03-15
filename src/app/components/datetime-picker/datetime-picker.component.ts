import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any

@Component({
    selector: 'datetime-picker',
    templateUrl: './datetime-picker.component.html'
})
export class DatetimePickerComponent implements AfterViewInit {
    @ViewChild('dateTimeInput') el:ElementRef;
    @Input() name: string;

    private id: string;

    constructor() {
        this.id = 'ng2_datetime_input_' + Math.random().toString(36).substring(7);
    }

    ngAfterViewInit() {
        $(this.el.nativeElement)
            .datetimepicker({
                format: 'yyyy-mm-dd hh:ii',
                todayBtn: true,
                linkField: this.id,
                linkFormat: 'yyyy-mm-dd hh:ii',
                autoclose: true
            });
    }
}
