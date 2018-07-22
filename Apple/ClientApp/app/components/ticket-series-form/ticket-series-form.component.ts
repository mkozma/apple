import { Series } from './../../models/Series';
import { Http } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'ticket-series-form',
    templateUrl: 'ticket-series-form.component.html'
})

export class TicketSeriesFormComponent implements OnInit {
    serie: Series;
    http: Http;
    baseUrl: string;

    
    constructor(
        private route:ActivatedRoute, 
        http: Http,
        @Inject('BASE_URL') baseUrl: string) { 
        this.http = http;
        this.baseUrl = baseUrl;

        this.route.paramMap
            .subscribe(params => {
                let id = +params.get('id');
                
                this.http.get(this.baseUrl + 'api/SeriesTickets/GetSeries/'+ (id-1)).subscribe(result => {
                    this.serie = result.json() as Series;
                    console.log(this.serie);
                }, error => console.error(error));
            });
    }

    ngOnInit() { 
        
    }
}