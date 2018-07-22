import { Series } from '../../models/Series';

import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'ticket-form',
    templateUrl: 'tickets-form.component.html'
})

export class TicketsFormComponent implements OnInit {
    public series: Series [] = [];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SeriesTickets/GetSeries').subscribe(result => {
            this.series = result.json() as Series[];
        }, error => console.error(error));
     }

    ngOnInit() { }

    
}

