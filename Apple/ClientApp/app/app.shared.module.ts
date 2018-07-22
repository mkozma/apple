import { TicketSeriesFormComponent } from './components/ticket-series-form/ticket-series-form.component';
import { TicketsFormComponent } from './components/tickets-form/tickets-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FetchDataDetailComponent } from './components/fetchdatadetail/fetchdatadetail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        FetchDataDetailComponent,
        HomeComponent,
        ShoppingCartComponent,
        TicketsFormComponent,
        TicketSeriesFormComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'tickets', component: TicketsFormComponent },
            { path: 'tickets/:id', component: TicketSeriesFormComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fetch-data/:id', component: FetchDataDetailComponent },
            { path: 'user', component: UserFormComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
