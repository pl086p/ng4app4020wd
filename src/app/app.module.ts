import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { MatTabsModule }    from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
//import { TabsModule } from 'ngx-bootstrap';
//import { NguiTabModule }    from '@ngui/tab';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './products/service/in-memory-data.service';

import { AppRoutingModule }  from './app.routing.module';
import { AppComponent }      from './app.component';

import { ComBike }           from './products/bike/bike-main.component';
import { BikeInfoComponent } from './products/bike-info/bike-info.component';
import { ComParent }         from './products/parent-child/parent.component';
import { ComChild }          from './products/parent-child/child.component';
import { ComCarList }        from './products/parent-child/car-list.component';
import { ComCarDetail }      from './products/parent-child/car-detail.component';
import { ComMessage }             from './products/ng2mqtt/message.component';

import { ComNguiTab }             from './products/ui/ngui-tab.component';
import { BootstrapComponent }     from './products/ui/bootstrap.component';

import { ComBoat }                from './services/boat/boat.component';
import { ComBoatDetail}           from './services/boat/boat-detail.component';
import { ComEmployee }            from './services/employee/employee.component';
import { ComEmployeeDetail}       from './services/employee/employee-detail.component';
import { ComCustomer }            from './services/customer/customer.component';
import { CustomerDetailComponent} from './services/customer/customer-detail.component';



@NgModule({
    declarations: [
        AppComponent,
        ComBike,
        BikeInfoComponent,
        ComParent,
        ComChild,
        ComCarList,
        ComCarDetail,
        ComMessage,
        
        ComNguiTab,
        BootstrapComponent,

        ComBoat,
        ComBoatDetail,
        ComEmployee,
        ComEmployeeDetail,        
        ComCustomer,
        CustomerDetailComponent
        //InMemoryWebApiModule,
        //InMemoryDataService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MatTabsModule,
        HttpClientModule,
        //TabsModule.forRoot()
        //NguiTabModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
